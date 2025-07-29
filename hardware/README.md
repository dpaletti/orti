<!--
SPDX-FileCopyrightText: 2025 <github.com/dpaletti/orti> contributors

SPDX-License-Identifier: CC-BY-SA-4.0
-->

# Hardware

## LTSpice Simulation Setup

### Installation

<!-- markdownlint-disable MD013 -->

Download

[LTSpice](https://www.analog.com/en/resources/design-tools-and-calculators/ltspice-simulator.html) -
runs natively on Windows and through Wine on Linux.

<!-- markdownlint-enable MD013 -->

### Configuration

1. **Set up search paths:**
   - Open **Tools** ⟶ **Settings** ⟶ **Search Paths**
   - Add the following paths to both `Symbol Search Paths` and
     `Simulation Library Search Paths`:

     ```bash
     <path_to_git_folder>/hardware/ltspice_simulation/models
     <path_to_git_folder>/hardware/ltspice_simulation/subcircuits
     ```

   - **Note:** On Windows, use `\` instead of `/` for path separators

2. **Run simulations:**
   - Open `*_sim` files in the `ltspice_simulation` folder to run specific simulations

## Block Diagram

![block diagram](./docs/resources/block_diagram.mmd.png)
