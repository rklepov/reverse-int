// index.js

function reverse2(a, r) {
    if (!r) return a;
    if (r < 0) return reverse2(a, -r);
    const d = r % 10;
    r /= 10;
    r |= 0;
    return reverse2(a * 10 + d, r);
}

function reverse(n) {
    return reverse2(0, n);
}

module.exports = reverse;

//__EOF__
