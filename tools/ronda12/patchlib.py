"""Ayudante de parches (ronda 12): respeta CRLF/LF y exige que el texto aparezca EXACTAMENTE una vez."""
import os
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
def sub(path, old, new, count=1):
    p = os.path.join(ROOT, path)
    with open(p, 'r', encoding='utf-8', newline='') as f: s = f.read()
    nl = '\r\n' if '\r\n' in s else '\n'
    old = old.replace('\r\n', '\n').replace('\n', nl); new = new.replace('\r\n', '\n').replace('\n', nl)
    n = s.count(old)
    assert n == count, f'{path}: se esperaba {count} aparición(es) y hay {n}: {old[:70]!r}'
    s = s.replace(old, new)
    with open(p, 'w', encoding='utf-8', newline='') as f: f.write(s)
def write(path, text):
    p = os.path.join(ROOT, path); os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, 'w', encoding='utf-8', newline='') as f: f.write(text)
