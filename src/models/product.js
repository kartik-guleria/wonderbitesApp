class Product {
  constructor(
    id,
    categoryIds,
    title,
    image,
    rating,
    price,
    description,
    kcal,
    product_images,
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.image = image;
    this.rating = rating;
    this.price = price;
    this.description = description;
    this.kcal = kcal;
    this.product_images = product_images;
  }
}
export default Product;
