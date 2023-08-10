# Axel Take Home

This the take home solution built by Germain Boue. Feel free to email me with any questions.

## Design Decisions

- Use of server components, everything rendered on the server (reduced bundle size / fast performance) apart from the search cmd+k palette component
- use of library shadcn as it is accessible and customizable (does not lock us in styling and is easy to extend classNames). I did try cmdk for this use case, it turned out not to be the better option
- since these are "blog posts" type there will likely be changes not that often so will probably add a caching strategy but for now we are using force-cache as default

## Wishlist

- take into account the rate limit from the API (3 per minute) and maybe use a throttle though I had no issues during building it
- Determined that I can recursively get the paragraph text and rich_text can contain content to. That would be my next step if I had more time in order to get the secondary text to also display under title
- Clicking on each would open Link using <Link> and the router navigation to take user to the page
- cmdk package had a different overlay color, would have to check their source code to see if that can be changed and talk to Design to see if that is ok otherwise find solution

## Installation

Step 1:

```bash
yarn install
```

Step 2:

```bash
yarn dev
```

Step 3:
Open chrome browser and go to http://localhost:3000/

## License

[MIT](https://choosealicense.com/licenses/mit/)
