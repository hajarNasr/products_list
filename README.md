**Description**  
This is a web page that loads a list of products from a `.csv` file and diplays them with pagination.
The web page consists of a header and a list. The header conatins a search box that you can use to search items on the list.  
Once you type in that search box, a drop-down list should show up with all the items whose titles inclue what you are typing.  
The list shows all the products with some details about each product (e.g. image, title, and price). You can click each product to see additional images for that product.

**Technologies used:**

- `React`, `TypeScript`, and `React-Redux`.
- [papaparse](https://www.papaparse.com/) to read the `.csv` file.
- [rc-pagination](https://www.npmjs.com/package/rc-pagination) for pagination.
- [react-lazy-load-image-component](https://www.npmjs.com/package/react-lazy-load-image-component) for images lazy loading.
- [sass](https://sass-lang.com/) for styling.
- [cypress](https://docs.cypress.io/guides/overview/why-cypress) for testing.

**To run the project locally, you can:**

1. Clone this repo: run `git clone https://github.com/hajarNasr/products_list.git`.
2. Install dependencies: run `yarn`.
3. Run `yarn start`, and you will be directed to [http://localhost:3000](http://localhost:3000).

**To test it:**

4. Run `yarn cypress:open` and then click `products_list.spec.js` in the `cypress` window.

   **Note:** Make sure you go through steps 1-3 before you run the tests.

**How it looks**

![a list of products](https://i.ibb.co/4M0RFgf/auto-complete.png)

**Thank you for reading.**
