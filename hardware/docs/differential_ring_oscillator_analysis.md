# Oscillator analysis

[oscillator analysis](./resources)

## Loop gain

**loop gain**: $H(s) = - \frac{A_0^3}{(1 + \frac{s}{\omega_0})^3}$

**Barkhausen criteria**:

- $|H(j\omega_0)| \geq 1$
- $\deg H(j\omega_0) = 180 \deg$

_minimum inversion per stage_: Each stage must contribute 180/3=60 degree of
inversion =>
$\tan^{-1} w_{osc}/w_0 = 60 \rightarrow w_{\text{osc}} = w_0\sqrt{3}$

_minimum gain per stage_:
$\frac{A_0^3}{[\sqrt{1+ (w_{\text{osc}}/w_0})^2]^3} = 1  \rightarrow A_0 = 2$
