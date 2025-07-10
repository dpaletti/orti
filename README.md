# Soil moisture sensor

**What**: a cheap, accurate, open, interoperable, and beautiful soil moisture
sensor

**Why**: other solutions miss at least one of the above features

**When**: no release date yet, a lot of stuff to get through

**How**: open-hardware and open-source all the way, working with the garage door
open

⟶ [What's inside?](#whats-inside)

⟶ [Why another one?](#why-another-one)

⟶ [When can I have one?](#when-can-i-have-one)

⟶ [How does this make sense?](#how-does-this-make-sense)

## What's inside?

- **accurate and affordable**: a soil moisture sensor performing in-between
  research grade and consumer hardware at an affordable price (~20€).
- **open and interconnected**: an open-hardware design with an open-source
  mobile app running (natively) on IOS and Android devices together with full
  support for Zigbee, Thread/Matter and Home Automation.
- **carefully designed**: a good looking home accessory which looks slick indoor
  and guarantees water resistance outdoor.

## Why another one

Because existing products do not tick all the boxes.

### High-Level Comparison

| Product                            | Price (€)    | Accuracy | Technology                       | Power supply                            |
| ---------------------------------- | ------------ | -------- | -------------------------------- | --------------------------------------- |
| Consumer sensors (Xiaomi, Ecowitt) | 18-30        | moderate | capacitive                       | Button/AA batteries (replaceable)       |
| Research grade (ECH20, SMT-100)    | 150-200      | highest  | high frequency reflectometry     | Wired                                   |
| DIY (B-Parasite)                   | DIY          | moderate | capacitive                       | Button (replaceable)                    |
| Maker (PLT-1)                      | ~20 (+extra) | moderate | capacitive                       | 18650 (rechargeable + replaceable)      |
| **Our solution**                   | **~20**      | **high** | **high frequency reflectometry** | **2× AAA (rechargeable + replaceable)** |

### Feature comparison

| Product          | Home Assistant | Zigbee/Matter | Mobile App | Plant DB integration | Ambient temp/humidity | Soil temperature | Irradiation | Outdoor use | Open  |
| ---------------- | -------------- | ------------- | ---------- | -------------------- | --------------------- | ---------------- | ----------- | ----------- | ----- |
| Xiaomi MI Flora  | ✓              | ✗             | ✓          | ✓                    | ✓                     | ✗                | ✓           | ✓           | ✗     |
| Ecowitt WH51     | ✗              | ✗             | ✓          | ✗                    | ✗                     | ✗                | ✗           | ✓           | ✗     |
| B-Parasite       | ✓              | ✓             | ✗          | ✗                    | ✓                     | ✗                | ✓           | ✓           | ✓     |
| PLT-1            | ✓              | ✗             | ✗          | ✗                    | ✗                     | ✓                | ✗           | ✗           | ✗     |
| **Our solution** | **✓**          | **✓**         | **✓**      | **✓**                | **✗**                 | **✓**            | **✗**       | **✓**       | **✓** |

**Why are we missing ambient temperature and humidity sensing?**

Because these measurements pertain other sensors. Take a balcony with many
plants and many soil moisture sensors, one for each pot. In such case we would
have a lot of redundant measurements which a single cheap specialized sensor can
replace easily. Such measurement is easily integrated in a mobile app
visualization, home integration automation and the like.

**Why are we missing irradiation sensing?**

Because these measurements are rarely reliable and such sensors require
specialized encasing design. Irradiation is an important measure to assess plant
health but the tradeoff between sensor usefulness and added system complexity is
not favorable in this phase.

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

## License

- **Software**: [GPLv3](LICENSE-GPL3)
- **Hardware**: [CERN-OHL-S-2.0](LICENSE-CERN-OHL-S)
- **Everything else**: [CC-BY-SA-4.0](LICENSE-CC-BY-SA)

See [LICENSE](LICENSE) for details.
