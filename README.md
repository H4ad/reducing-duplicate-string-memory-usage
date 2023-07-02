# Reducing Duplicate String Memory Usage

This is just an experiment to see which is the most effective way to reduce memory usage when having duplicate strings (IDs).

Imagine you have an ID and you need to save it in different places by duplicating the ID. The question is, what can we do to reduce memory usage since each copy of the ID will be a allocate a new memory?

# Methodology

I was inspired by [this issue](https://github.com/oramasearch/orama/issues/426), so I create three tests:

- `list`: We are adding the strings inside a `list`.
- `map`: We are adding strings inside a `map`.
- `object`: We are adding the strings inside a `object`.

For each test, I used different number of instances, so we will add the string `N` times inside a `list`.

Also, I came up with four cenarios to test:

- `string`: just duplicate the string, this is the baseline.
- `int-map`: save the string inside a `map` and then return an int.
- `int-object`: save the string inside a `object` and return an int.
- `symbol`: use `Symbol.for` to deduplicate the string.

Finally, the methods just need to deduplicate the string, we don't care how long it takes to get the original string from the mapped value string.

# Results

You can collect the results in your machine by running:

```
node collect.mjs
```

> You can customize the parameters on [parameters.mjs](./parameters.mjs)

## Instances: 3

### list

| Instances | Type       | N. of IDs | ID Size | Memory (mb) | Time Spent (ms) |
| --------- | ---------- | --------- | ------- | ----------- | --------------- |
| 3         | int-map    | 1000000   | 13      | 157.01      | 1165.40         |
| 3         | int-object | 1000000   | 13      | 143.76      | 1551.20         |
| 3         | string     | 1000000   | 13      | 127.50      | 700.39          |
| 3         | symbol     | 1000000   | 13      | 151.01      | 1412.58         |
| 3         | int-map    | 1000000   | 26      | 187.26      | 1261.62         |
| 3         | int-object | 1000000   | 26      | 158.76      | 1711.06         |
| 3         | string     | 1000000   | 26      | 159.75      | 792.91          |
| 3         | symbol     | 1000000   | 26      | 166.76      | 1418.61         |
| 3         | int-map    | 1000000   | 39      | 216.26      | 1447.34         |
| 3         | int-object | 1000000   | 39      | 167.01      | 1857.82         |
| 3         | string     | 1000000   | 39      | 187.25      | 970.75          |
| 3         | symbol     | 1000000   | 39      | 174.26      | 1497.16         |

### object

| Instances | Type       | N. of IDs | ID Size | Memory (mb) | Time Spent (ms) |
| --------- | ---------- | --------- | ------- | ----------- | --------------- |
| 3         | int-map    | 1000000   | 13      | 156.26      | 1149.95         |
| 3         | int-object | 1000000   | 13      | 143.76      | 1620.56         |
| 3         | string     | 1000000   | 13      | 185.90      | 2266.96         |
| 3         | symbol     | 1000000   | 13      | 241.16      | 2220.86         |
| 3         | int-map    | 1000000   | 26      | 186.76      | 1323.17         |
| 3         | int-object | 1000000   | 26      | 159.01      | 1797.81         |
| 3         | string     | 1000000   | 26      | 196.90      | 2441.93         |
| 3         | symbol     | 1000000   | 26      | 252.16      | 2321.46         |
| 3         | int-map    | 1000000   | 39      | 216.26      | 1553.52         |
| 3         | int-object | 1000000   | 39      | 167.01      | 1903.52         |
| 3         | string     | 1000000   | 39      | 205.15      | 2620.59         |
| 3         | symbol     | 1000000   | 39      | 260.41      | 2444.93         |

### map

| Instances | Type       | N. of IDs | ID Size | Memory (mb) | Time Spent (ms) |
| --------- | ---------- | --------- | ------- | ----------- | --------------- |
| 3         | int-map    | 1000000   | 13      | 209.66      | 1818.29         |
| 3         | int-object | 1000000   | 13      | 173.91      | 2350.02         |
| 3         | string     | 1000000   | 13      | 180.90      | 1606.18         |
| 3         | symbol     | 1000000   | 13      | 177.16      | 2194.16         |
| 3         | int-map    | 1000000   | 26      | 242.41      | 1974.35         |
| 3         | int-object | 1000000   | 26      | 184.91      | 2368.09         |
| 3         | string     | 1000000   | 26      | 214.65      | 1811.20         |
| 3         | symbol     | 1000000   | 26      | 192.16      | 2192.47         |
| 3         | int-map    | 1000000   | 39      | 270.66      | 2179.72         |
| 3         | int-object | 1000000   | 39      | 193.16      | 2659.81         |
| 3         | string     | 1000000   | 39      | 242.65      | 1943.45         |
| 3         | symbol     | 1000000   | 39      | 200.41      | 2310.57         |

## Instances: 4

### list

| Instances | Type       | N. of IDs | ID Size | Memory (mb) | Time Spent (ms) |
| --------- | ---------- | --------- | ------- | ----------- | --------------- |
| 4         | int-map    | 1000000   | 13      | 165.71      | 1114.88         |
| 4         | int-object | 1000000   | 13      | 153.71      | 1569.07         |
| 4         | string     | 1000000   | 13      | 138.46      | 824.52          |
| 4         | symbol     | 1000000   | 13      | 160.96      | 1391.73         |
| 4         | int-map    | 1000000   | 26      | 196.46      | 1249.15         |
| 4         | int-object | 1000000   | 26      | 168.71      | 1799.05         |
| 4         | string     | 1000000   | 26      | 169.21      | 931.89          |
| 4         | symbol     | 1000000   | 26      | 176.96      | 1499.29         |
| 4         | int-map    | 1000000   | 39      | 226.21      | 1383.50         |
| 4         | int-object | 1000000   | 39      | 176.96      | 1908.85         |
| 4         | string     | 1000000   | 39      | 197.46      | 951.85          |
| 4         | symbol     | 1000000   | 39      | 184.21      | 1517.88         |

### object

| Instances | Type       | N. of IDs | ID Size | Memory (mb) | Time Spent (ms) |
| --------- | ---------- | --------- | ------- | ----------- | --------------- |
| 4         | int-map    | 1000000   | 13      | 166.46      | 1247.96         |
| 4         | int-object | 1000000   | 13      | 153.71      | 1650.91         |
| 4         | string     | 1000000   | 13      | 229.91      | 2619.04         |
| 4         | symbol     | 1000000   | 13      | 285.17      | 2425.82         |
| 4         | int-map    | 1000000   | 26      | 196.96      | 1337.19         |
| 4         | int-object | 1000000   | 26      | 169.46      | 1922.03         |
| 4         | string     | 1000000   | 26      | 244.91      | 2788.46         |
| 4         | symbol     | 1000000   | 26      | 300.17      | 2683.41         |
| 4         | int-map    | 1000000   | 39      | 226.71      | 1588.79         |
| 4         | int-object | 1000000   | 39      | 176.96      | 1995.89         |
| 4         | string     | 1000000   | 39      | 253.16      | 2854.51         |
| 4         | symbol     | 1000000   | 39      | 308.42      | 2818.75         |

### map

| Instances | Type       | N. of IDs | ID Size | Memory (mb) | Time Spent (ms) |
| --------- | ---------- | --------- | ------- | ----------- | --------------- |
| 4         | int-map    | 1000000   | 13      | 237.42      | 2052.99         |
| 4         | int-object | 1000000   | 13      | 197.92      | 2512.57         |
| 4         | string     | 1000000   | 13      | 209.66      | 2038.11         |
| 4         | symbol     | 1000000   | 13      | 205.17      | 2423.05         |
| 4         | int-map    | 1000000   | 26      | 270.42      | 2168.02         |
| 4         | int-object | 1000000   | 26      | 212.92      | 2711.63         |
| 4         | string     | 1000000   | 26      | 242.41      | 2098.43         |
| 4         | symbol     | 1000000   | 26      | 220.17      | 2485.54         |
| 4         | int-map    | 1000000   | 39      | 298.67      | 2552.10         |
| 4         | int-object | 1000000   | 39      | 221.17      | 2887.52         |
| 4         | string     | 1000000   | 39      | 270.91      | 2277.30         |
| 4         | symbol     | 1000000   | 39      | 228.42      | 2530.50         |

## Instances: 5

### list

| Instances | Type       | N. of IDs | ID Size | Memory (mb) | Time Spent (ms) |
| --------- | ---------- | --------- | ------- | ----------- | --------------- |
| 5         | int-map    | 1000000   | 13      | 175.67      | 1225.06         |
| 5         | int-object | 1000000   | 13      | 163.67      | 1600.97         |
| 5         | string     | 1000000   | 13      | 147.91      | 870.36          |
| 5         | symbol     | 1000000   | 13      | 170.92      | 1526.71         |
| 5         | int-map    | 1000000   | 26      | 206.92      | 1745.13         |
| 5         | int-object | 1000000   | 26      | 178.67      | 2472.79         |
| 5         | string     | 1000000   | 26      | 178.91      | 1261.53         |
| 5         | symbol     | 1000000   | 26      | 186.67      | 1624.70         |
| 5         | int-map    | 1000000   | 39      | 235.42      | 1613.17         |
| 5         | int-object | 1000000   | 39      | 187.92      | 1934.18         |
| 5         | string     | 1000000   | 39      | 207.16      | 1514.83         |
| 5         | symbol     | 1000000   | 39      | 194.92      | 1770.80         |

### object

| Instances | Type       | N. of IDs | ID Size | Memory (mb) | Time Spent (ms) |
| --------- | ---------- | --------- | ------- | ----------- | --------------- |
| 5         | int-map    | 1000000   | 13      | 175.92      | 1477.93         |
| 5         | int-object | 1000000   | 13      | 163.67      | 1852.06         |
| 5         | string     | 1000000   | 13      | 281.92      | 3268.38         |
| 5         | symbol     | 1000000   | 13      | 337.18      | 3152.66         |
| 5         | int-map    | 1000000   | 26      | 206.67      | 1554.97         |
| 5         | int-object | 1000000   | 26      | 178.67      | 2039.30         |
| 5         | string     | 1000000   | 26      | 292.92      | 3331.66         |
| 5         | symbol     | 1000000   | 26      | 348.18      | 3093.57         |
| 5         | int-map    | 1000000   | 39      | 236.17      | 1670.40         |
| 5         | int-object | 1000000   | 39      | 186.92      | 2051.23         |
| 5         | string     | 1000000   | 39      | 301.17      | 3328.40         |
| 5         | symbol     | 1000000   | 39      | 356.43      | 3363.82         |

### map

| Instances | Type       | N. of IDs | ID Size | Memory (mb) | Time Spent (ms) |
| --------- | ---------- | --------- | ------- | ----------- | --------------- |
| 5         | int-map    | 1000000   | 13      | 265.68      | 2591.60         |
| 5         | int-object | 1000000   | 13      | 229.93      | 2972.86         |
| 5         | string     | 1000000   | 13      | 237.17      | 2680.83         |
| 5         | symbol     | 1000000   | 13      | 237.18      | 2844.49         |
| 5         | int-map    | 1000000   | 26      | 295.93      | 2608.66         |
| 5         | int-object | 1000000   | 26      | 240.93      | 3251.45         |
| 5         | string     | 1000000   | 26      | 267.92      | 2789.61         |
| 5         | symbol     | 1000000   | 26      | 248.18      | 3024.63         |
| 5         | int-map    | 1000000   | 39      | 326.93      | 2711.88         |
| 5         | int-object | 1000000   | 39      | 249.18      | 3213.19         |
| 5         | string     | 1000000   | 39      | 298.92      | 2770.08         |
| 5         | symbol     | 1000000   | 39      | 256.43      | 3080.35         |
