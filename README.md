# Soil moisture sensor

**What**: a cheap, accurate, open, interoperable, and beautiful soil moisture
sensor (see [What's inside?](What's inside?) for more details).

**Why**: other solutions miss at least one of the above features --> [Why
another one?](Why another one?))

**When**: don't know, a lot of stuff to get through --> [When can I have
one](When can I have one?))

**How**: open-hardware and open-source all the way, working with the garage door
open --> [How does this make sense](How does this make sense?)

## What's inside?

- A 20€ (retail price) frequency-domain reflectometry moisture sensor performing
  in-between research grade and consumer hardware at an affordable price.
- An open-hardware design with an open-source app running (natively) on IOS and
  Android devices together with full support for Zigbee, Thread/Matter and Home
  Automation.
- A good looking home accessory which looks slick indoor and guarantees water
  resistance outdoor

## Why another one

### High-Level Comparison

| Product                            | Price (€) | Accuracy | Technology           | Power                                   |
| ---------------------------------- | --------- | -------- | -------------------- | --------------------------------------- |
| Consumer sensors (Xiaomi, Ecowitt) | 18-30     | Moderate | Capacitive           | Button/AA batteries                     |
| Research grade (ECH20, SMT-100)    | 150-200   | High     | HF reflectometry     | Wired                                   |
| DIY/Maker (B-Parasite, PLT-1)      | DIY/24    | Moderate | Capacitive           | Button/18650                            |
| **Our solution**                   | **~20**   | **High** | **HF reflectometry** | **2× AAA (rechargeable + replaceable)** |

### Detailed Connectivity & Features

| Product          | Home Assistant | Zigbee | Thread/Matter | Mobile App   | Plant Databases                  | Open Source/Hardware |
| ---------------- | -------------- | ------ | ------------- | ------------ | -------------------------------- | -------------------- |
| Xiaomi MI Flora  | ?              | ?      | ?             | Vendor only  | ?                                | ?                    |
| Ecowitt WH51     | ?              | ?      | ?             | ?            | ?                                | ?                    |
| ECH20 EC5        | ?              | ?      | ?             | ?            | ?                                | ?                    |
| SMT-100          | ?              | ?      | ?             | ?            | ?                                | ?                    |
| B-Parasite       | ?              | ?      | ?             | ?            | ?                                | ?                    |
| PLT-1            | ?              | ?      | ?             | ?            | ?                                | ?                    |
| **Our solution** | **?**          | **?**  | **?**         | **? (open)** | **? (OpenPlantBook, PlantaeDB)** | **?**                |

TODO: fix this

## When can I have one?

A lot of stuff to get through (contributors welcome!):

- [x] high level product design
- [x] circuit design
- [ ] circuit simulation --> **ongoing in the simulation branch**
- [ ] PCB layout and manufacturing
- [ ] firmware development
- [ ] mobile app development for remote sensor control
- [ ] encasing design
- [ ] testing with early adopters

## How does this make sense?

I don't know (yet).
