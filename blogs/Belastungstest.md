---
title: "Markdown Test File-2"
date: "2022-02-29"
subtitle: "More Info here!"
---
***
>[!Info] Definition
„Testen, welcher Belastung ein System standhalten kann, bevor es ausfällt. Wird als eine Art nicht funktionaler Test angesehen. Belastungstests werden beispielsweise verwendet, um die Leistung unter realen Lastbedingungen zu bewerten.“

***
#### Verwendung:
- Überprüfung des Systemverhaltens bei bestimmten Auslastungen
- Messung von Zuverlässigkeit, Geschwindigkeit, Skalierbarkeit und Reaktionsfähigkeit
#### Typische Tests:
- Antwortzeiten bei hoher Anzahl von Anfragen  Verhalten bei großen Datenmengen
#### Ergebnisse:
- Erfüllung der Leistungsanforderungen
- Identifizierung von Engpässen
- Beurteilung der Stabilität bei Belastungsspitzen
#### Weitere Anwendungsbereiche:
- Fehlersuche
- Optimierung der Systemleistung
- Vergleich verschiedener Systeme

***

#### Vor- und Nachteile
| Vorteile | Nachteile |
| ----------- | ----------- |
| Objektive und quantitative Bewertung der Systemleistung | Testerstellung kann aufwändig sein |
| Früherkennung von Leistungsproblemen | Ergebnisse sind stark vom Testumfeld abhängig | 
| Vermeidung von Ausfällen im Live-Betrieb | Aussagekraft der Ergebnisse kann begrenzt sein |

***
#### Funktionsweise:

![Funktionsweise](Capture99999.jpg)
1. Planning the stress test
- Sammeln von Systemdaten
- Analyse des Systems 
- Definieren von Zielen
2. Create Automation Scripts
- Erstellung von Skripten
- Nutzung und Erstellung von Testdaten
3. Script Execution
- Ausführung von erstellten Skripten mit Testdaten
4. Results Analysis
- Analysieren und Dokumentieren der Ergebnisse
5. Tweaking and Optimazation
- ggf. Anpassung an Code und System basierend auf Ergebnissen

***
#### Belastungsteststypen
1. Server-client Stress Testing
- viele Anfragen von vielen Clients an einen Server
2. Product Stress Testing
- Entdeckung von Fehlern im Zusammenhang mit Datenverriegelung, Netzwerkproblemen oder Überlastung der Software
3. Transactional Stress Testing
- mehrere Transkationen zweier oder mehrerer Anwendungen untereinander
- häufig zur Feinabstimmung der Systeme
4. Systematic Stress Testing
- Stresstests auf derselben Maschine 
5. Analytical Stress Testing 
- Systeme werden mit abnormalen Parametern oder Bedingungen gestestet
6. Application Stress Testing 
- konzentriert sich auf Identifizierung von Leistungsengpässen und Netzwerkproblemen in Softwareprodukt

***
#### Beispiele:

1. Jmeter
2. Iperf
3. LoadNinja
4. Smartmeter

***
#### Projektspezifisch:

1. Server-client Stress Testing Memory:
- mehrere Nutzende auf gleichen Webserver zugreifen über mehrere Clients
2. Transactuinal Stess Testing:
- game.php, welches fürs Spielen des Memorys verantwortlich ist muss mit Highscore (stats.php) korrekt zusammenarbeiten
3. Systematic Stress Testing:
- Datenbankverbindung mit Webserver muss auf selbem Gerät einwandfrei funktionieren 

>[!Todo] Quellen
atlassian. „Types of Software Testing“. www.atlassian.com. https://www.atlassian.com/de/continuous-delivery/software-testing/types-of-software-testing/ (abgerufen 13.02.2024)
IBM. „Wie funktionieren Softwaretest?“. www.ibm.com. https://www.ibm.com/de-de/topics/software-testing/ (abgerufen 13.02.2024)