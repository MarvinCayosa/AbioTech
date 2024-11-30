#include <WiFi.h>
#include <HTTPClient.h>
#include <Arduino_JSON.h>
#include "DHT.h"

// =================== Pin Definitions ===================
#define DHTPIN 15
#define DHTTYPE DHT22
DHT dht(DHTPIN, DHTTYPE);

#define ON_BOARD_LED 2
#define LED_1 13
#define LED_2 12


// =================== WiFi Credentials ===================
const char* ssid = "marvin";
const char* password = "marvincayosa";

// =================== Global Variables ===================
float temperature = 0.0;
int humidity = 0;
String dhtStatus = "";

String postData = "";
String payload = "";

// =================== Function Prototypes ===================
void connectToWiFi();
void fetchLEDStates();
void controlLEDs();
void readDHTSensor();
void sendDataToServer(const String& url, const String& data);
String constructDHTPostData();
String constructGasPostData();

// =================== Setup ===================
void setup() {
    Serial.begin(115200);

    // Initialize pins
    pinMode(ON_BOARD_LED, OUTPUT);
    pinMode(LED_1, OUTPUT);
    pinMode(LED_2, OUTPUT);

    // Initial LED state
    digitalWrite(ON_BOARD_LED, LOW);
    digitalWrite(LED_1, LOW);
    digitalWrite(LED_2, LOW);

    // Connect to WiFi
    connectToWiFi();

    // Initialize DHT sensor
    dht.begin();
}

// =================== Loop ===================
void loop() {
    if (WiFi.status() == WL_CONNECTED) {
        // Fetch LED states and control them
        fetchLEDStates();
        controlLEDs();

        // Read DHT sensor data
        readDHTSensor();

        // Construct and send DHT/LED data to the server
        String dhtPostData = constructDHTPostData();
        sendDataToServer("http://192.168.43.213/AbioTech/updateDHT11data_and_recordtable.php", dhtPostData);


        delay(4000); // Adjust interval as needed
    } else {
        Serial.println("WiFi disconnected! Attempting to reconnect...");
        connectToWiFi();
    }
}

// =================== Function Definitions ===================
void connectToWiFi() {
    WiFi.mode(WIFI_STA);
    WiFi.begin(ssid, password);

    Serial.print("Connecting to WiFi...");
    int timeout = 20 * 2; // 20 seconds
    while (WiFi.status() != WL_CONNECTED && timeout > 0) {
        digitalWrite(ON_BOARD_LED, HIGH);
        delay(250);
        digitalWrite(ON_BOARD_LED, LOW);
        delay(250);
        timeout--;
    }

    if (WiFi.status() == WL_CONNECTED) {  
        Serial.println("Connected!");
        Serial.print("IP Address: ");
        Serial.println(WiFi.localIP());
    } else {
        Serial.println("Failed to connect to WiFi. Restarting...");
        ESP.restart();
    }
}

void fetchLEDStates() {
    HTTPClient http;
    http.begin("http://192.168.43.213/AbioTech/getdata.php");
    http.addHeader("Content-Type", "application/x-www-form-urlencoded");

    int httpCode = http.POST("id=esp32_01");
    payload = http.getString();
    http.end();

    Serial.printf("HTTP Code: %d\n", httpCode);
    Serial.printf("Payload: %s\n", payload.c_str());
}

void controlLEDs() {
    JSONVar jsonObject = JSON.parse(payload);

    if (JSON.typeof(jsonObject) == "undefined") {
        Serial.println("Failed to parse JSON payload!");
        return;
    }

    digitalWrite(LED_1, strcmp(jsonObject["LED_01"], "ON") == 0 ? HIGH : LOW);
    digitalWrite(LED_2, strcmp(jsonObject["LED_02"], "ON") == 0 ? HIGH : LOW);
}

void readDHTSensor() {
    temperature = dht.readTemperature();
    humidity = dht.readHumidity();

    if (isnan(temperature) || isnan(humidity)) {
        Serial.println("Failed to read from DHT sensor!");
        temperature = 0.0;
        humidity = 0;
        dhtStatus = "FAILED";
    } else {
        dhtStatus = "SUCCEED";
    }

    Serial.printf("Temperature: %.2f°C\n", temperature);
    Serial.printf("Humidity: %d%%\n", humidity);
    Serial.printf("DHT Status: %s\n", dhtStatus.c_str());
}

void sendDataToServer(const String& url, const String& data) {
    HTTPClient http;
    http.begin(url);
    http.addHeader("Content-Type", "application/x-www-form-urlencoded");

    int httpCode = http.POST(data);
    String response = http.getString();
    http.end();

    Serial.printf("HTTP Code: %d\n", httpCode);
    Serial.printf("Response: %s\n", response.c_str());
}

String constructDHTPostData() {
    String led1State = digitalRead(LED_1) ? "ON" : "OFF";
    String led2State = digitalRead(LED_2) ? "ON" : "OFF";

    String data = "id=esp32_01";
    data += "&temperature=" + String(temperature);
    data += "&humidity=" + String(humidity);
    data += "&status_read_sensor_dht11=" + dhtStatus;
    data += "&led_01=" + led1State;
    data += "&led_02=" + led2State;



    return data;
}