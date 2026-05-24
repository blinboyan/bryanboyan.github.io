# Validate profile — bryanboyan.github.io

Personal blog hosted via GitHub Pages. Currently dormant (last meaningful
commit months ago). Smoke = "GitHub Pages serves the deployed site."

## Smoke command(s)

```bash
# Local preview if a generator (Jekyll/Hugo/Eleventy) is configured:
# (currently none — repo serves static files directly)

# Check the live site:
curl -sf https://bryanboyan.github.io/ | head -20
```

## E2E entry points

- Open https://bryanboyan.github.io/ in a browser, confirm the homepage
  renders and links work.
- For new posts: confirm the post is accessible at its expected URL after
  the GitHub Pages build completes.

## Test entry points

None today. Add an HTML/link checker (e.g. `htmltest` or `lychee`) if the
site becomes more active.

## Highest fidelity rung available

- [x] Static (whatever generator's check, if any)
- [ ] Unit
- [ ] Integration
- [x] Real-deps E2E (curl the live site after deploy)
- [x] Manual user flow (browser visit)

For most changes, "looks right in the browser after deploy" is the gate.
