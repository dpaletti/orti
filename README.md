<!--
SPDX-FileCopyrightText: 2025 <github.com/dpaletti/orti> contributors

SPDX-License-Identifier: CC-BY-SA-4.0
-->

# Orti: soil moisture sensor

[![Main](https://img.shields.io/badge/Main-passing-success?logo=github&logoColor=white)](https://github.com/dpaletti/orti/actions)
[![REUSE compliance](https://img.shields.io/github/actions/workflow/status/dpaletti/orti/reuse.yml?label=REUSE%20compliance)](https://github.com/dpaletti/orti/actions/workflows/reuse.yml)

**What**: a cheap, accurate, open, interoperable, and beautiful soil moisture sensor

**Why**: other solutions miss at least one of the above features

**When**: no release date yet, a lot of stuff to get through

**How**: open-hardware and open-source all the way, working with the garage door open

⟶ [What's inside?](#whats-inside)

⟶ [Why another one?](#why-another-one)

⟶ [When can I have one?](#when-can-i-have-one)

⟶ [How does this make sense?](#how-does-this-make-sense)

**Orti** /'orti/: Italian for kitchen gardens where people grow produce for their own
use.

## What's inside?

- **accurate and affordable**: a soil moisture sensor performing in-between research
  grade and consumer hardware at an affordable price (~20€).
- **open and interconnected**: an open-hardware design with an open-source mobile app
  running (natively) on IOS and Android devices together with full support for Zigbee,
  Thread/Matter and Home Automation.
- **carefully designed**: a good looking home accessory which looks slick indoor and
  guarantees water resistance outdoor.

## Why another one

Because existing products do not tick all the boxes.

### High-Level comparison

| Product                            | Price (€)    | Accuracy | Technology                       | Power supply                            |
| ---------------------------------- | ------------ | -------- | -------------------------------- | --------------------------------------- |
| Consumer sensors (Xiaomi, Ecowitt) | 18-30        | moderate | capacitive                       | Button/AA batteries (replaceable)       |
| Research grade (ECH20, SMT-100)    | 150-200      | highest  | high frequency reflectometry     | Wired                                   |
| DIY (B-Parasite)                   | DIY          | moderate | capacitive                       | Button (replaceable)                    |
| Maker (PLT-1)                      | ~20 (+extra) | moderate | capacitive                       | 18650 (rechargeable + replaceable)      |
| **Orti**                           | **~20**      | **high** | **high frequency reflectometry** | **2× AAA (rechargeable + replaceable)** |

### Feature comparison

| Product         | Home Assistant | Zigbee/Matter | Mobile App | Plant DB integration | Ambient temp/humidity | Soil temperature | Irradiation | Outdoor use | Open  |
| --------------- | -------------- | ------------- | ---------- | -------------------- | --------------------- | ---------------- | ----------- | ----------- | ----- |
| Xiaomi MI Flora | ✓              | ✗             | ✓          | ✓                    | ✓                     | ✗                | ✓           | ✓           | ✗     |
| Ecowitt WH51    | ✗              | ✗             | ✓          | ✗                    | ✗                     | ✗                | ✗           | ✓           | ✗     |
| B-Parasite      | ✓              | ✓             | ✗          | ✗                    | ✓                     | ✗                | ✓           | ✓           | ✓     |
| PLT-1           | ✓              | ✗             | ✗          | ✗                    | ✗                     | ✓                | ✗           | ✗           | ✗     |
| **Orti**        | **✓**          | **✓**         | **✓**      | **✓**                | **✗**                 | **✓**            | **✗**       | **✓**       | **✓** |

**Why are we missing ambient temperature and humidity sensing?**

Because these measurements pertain other sensors. Take a balcony with many plants and
many soil moisture sensors, one for each pot. In such case we would have a lot of
redundant measurements which a single cheap specialized sensor can replace easily. Such
measurement is easily integrated in a mobile app visualization, home integration
automation and the like.

**Why are we missing irradiation sensing?**

Because these measurements are rarely reliable and such sensors require specialized
encasing design. Irradiation is an important measure to assess plant health but the
tradeoff between sensor usefulness and added system complexity is not favorable in this
phase.

## When can I have one?

A lot of stuff to get through, [contributors are welcome!](CONTRIBUTING.md).

For a more detailed view of past, ongoing and future activities see the
[kanban board](https://github.com/users/dpaletti/projects/2).

## How does this make sense?
I don't know (yet).
<!---
A product is protected through innovation and branding, not obscurity. Lowering the
barrier of entry for competitors is a low price to pay for a community that constantly
regenerates the product through open collaboration.

**How is this economically viable?**

> Sell the product at the right price point with the right feature set through the right
> suppliers and distributors. Add coherent branding and you are set. Definitely not easy
> but nothing changes from a traditional business.

**How do you prevent other businesses from reselling your product?**

> You don't. Easier replication means that branding and marketing become crucial, which
> is already the case for most businesses. Every product can already be reverse
> engineered and replicated, lowering the replication barrier in exchange for community
> engagement is a net positive.

**How do you get recurring revenues?**

> Professional farmers. Leverage the experience and credibility built in the consumer
> market to develop products for precision agriculture.

**How do you structure an organization stewarding this vision?**

> A worker cooperative with open and democratic governance that:
>
> - contributes to design and development in the open
> - coordinates community contributions democratically
> - sells finished products and adjacent services transparently, without resorting to
>   closed source development.

**How do you finance all this?**

> Bootstrapping, make the business profitable as soon as possible and grow organically.
> We are in for the long run.
-->
## License

Code, hardware and all other artifacts are licensed as open and copyleft.

- **software folder**: [GPLv3 or later](LICENSES/GPL-3.0-or-later.txt)
- **hardware folder**: [CERN-OHL-S-2.0](LICENSES/CERN-OHL-S-2.0.txt)
- **everything else**: [CC-BY-SA-4.0](LICENSES/CC-BY-SA-4.0.txt)

This project is [REUSE compliant](https://reuse.software/). Each file contains SPDX
license identifiers, and full license texts are available in the
[`LICENSES/`](https://github.com/dpaletti/orti/blob/main/LICENSES) directory. License
files are also provided in the project root directory to be correctly displayed in
Github.

This project employs the developer certificate of origin (see
[DCO](https://github.com/dpaletti/orti/blob/main/DCO)) to ensure third-parties don't
claim ownership over contributions. DCO is enforced through a 'signed-off-by' section in
commit messages, see [contributors guide](CONTRIBUTING.md) for more information on how
to add one to your commit messages.
