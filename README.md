## Web-Programmierung HWR-Informatik-Semester 4

Erstellung einer Single-Page-Application mit Next.JS (Version 14).

## Voraussetzungen

Betriebssystem: Linux, Windows, MacOS mit bereits installiertem Docker.

## Installation

Klonen des Repositories: [Web-Prog-HWR](https://github.com/DerNikls/Web-Prog-HWR)

In der Dockerfile wird das Projekt bereits mit next.js gebaut, es ist kein weiterer "building" Prozess mehr nötig.

```bash
# Herunterladen des Repositories
git clone https://github.com/DerNikls/Web-Prog-HWR.git
# Ändern des aktuellen Pfades zum heruntergeladenen Repository
# Kann ggf. abweichen bei Ändern des Installationspfads
cd ./Web-Prog-HWR.git
# Building-Prozess des Docker-Container
docker build -t taege-niklas-it22b-hwr-web .
# Nach dem Building-Prozess, Ausführen der Webseite auf Port: 3000 
# Port-Mapping vom Client zum Container ist wieder anpassbar.
docker run -p 3000:3000 taege-niklas-it22b-hwr-web
```
Aufrufen der Webseite unter [http://localhost:3000](http://localhost:3000)

## Programme und Framework

Folgende Ressourcen wurden genutzt:

- [Next.js](https://nextjs.org/) - Next.js features and API. Version 14
- [Node.JS](https://nodejs.org/en) - Run Javascript everywhere. Version 20
- [Tailwind.css](https://tailwindcss.com/) - Rapidly build modern websites without ever leaving your HTML. Version 3.4.3
- [Typescript](https://www.typescriptlang.org/) - TypeScript is JavaScript with syntax for types.
- [Node Package Manager](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager) - npm is the standard package manager for Node.js.
