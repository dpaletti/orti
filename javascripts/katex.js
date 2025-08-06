// SPDX-FileCopyrightText: 2025 <github.com/dpaletti/soil-moisture-sensor> contributors
//
// SPDX-License-Identifier: CC-BY-SA-4.0

document$.subscribe(({ body }) => {
  renderMathInElement(body, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true },
    ],
  });
});
