using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if (context.Products.Any()) return;

            var products = new List<Product>
            {
                		new Product
                {
                    Name = "Lays Original Potato Chips",
                    Description =
                        "Balance out your sweet tooth with the Lays Original Potato Chips. Made with a crispy and light texture, these golden slices always hit the spot.",
                    Price = 35,
                    PictureUrl = "/images/products/chips-laysoriginal.png",
                    Brand = "Lays",
                    Type = "Chips",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Pringles Sour Cream & Onion Crisps",
                    Description = "The awesomeness of sour cream, onion and potato together cannot be measured by modern science. We have decided it is simply a flavor combination nature intended and man perfected.",
                    Price = 69,
                    PictureUrl = "/images/products/chips-sourcream.png",
                    Brand = "Pringles",
                    Type = "Chips",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Koikeya Karamucho RichCut Potato Chips-Hot Chili",
                    Description =
                        "Get your heat on! Packed with red hot chili spice, these popular Japanese potato chips will make your mouth sizzle with fiery flavor!",
                    Price = 39,
                    PictureUrl = "/images/products/chips-karamuchochili.png",
                    Brand = "Koikeya",
                    Type = "Chips",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Koikeya Polinky Corn Soup Chips",
                    Description =
                        "Enjoy a mildly sweet taste and aroma of natural corn.",
                    Price = 39,
                    PictureUrl = "/images/products/chips-cornsoup.png",
                    Brand = "Koikeya",
                    Type = "Chips",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Hwa Yuan Taiwan Oyster Omelette Potato Chips",
                    Description =
                        "With these potato chips, you can enjoy the flavors of Taiwan right from your couch! The bold and distinctive sweet and salty Oyster Omelette flavor tastes just like its beloved Taiwanese dish namesake.",
                    Price = 35,
                    PictureUrl = "/images/products/chips-oysteromelette.png",
                    Brand = "Hwa Yuan",
                    Type = "Chips",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Glico Giant Pocky Chocolate",
                    Description =
                        "Pocky gave us a crispy and sweet biscuit stick dipped in rich milk chocolate. This version of the sweet stick has been super-sized for superior snackability.",
                    Price = 200,
                    PictureUrl = "/images/products/biscuits-pockygiant.png",
                    Brand = "Glico",
                    Type = "Biscuits",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Imei Strawberry Puffs",
                    Description =
                        "IMEI Strawberry Puffs are sought-after due to their irresistible fruity flavor. Being light and airy, they make for a delightful snack any time.",
                    Price = 25,
                    PictureUrl = "/images/products/biscuits-strawberrypuff.png",
                    Brand = "IMei",
                    Type = "Biscuits",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Oreo Chocolate Sandwich Cookies",
                    Description =
                        "Take a delicious break with OREO Chocolate Sandwich Cookies. OREO cookies sandwich a rich creme filling between the bold taste of two chocolate wafers--making them milk's favorite cookie.",
                    Price = 55,
                    PictureUrl = "/images/products/biscuits-oreo.png",
                    Brand = "Oreo",
                    Type = "Biscuits",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Meiji Hello Panda Chocolate",
                    Description =
                        "Crispy on the outside, creamy within! Crunch on the preferred choice for tea parties and tasty snacks that come in six delicious flavours.",
                    Price = 22,
                    PictureUrl = "/images/products/biscuits-hellopanda.png",
                    Brand = "Meiji",
                    Type = "Biscuits",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Imei Crunchoco Almond Milk Chocolate",
                    Description =
                        "The rich dark chocolate flavor coats each cereal piece. Each cookie is topped with sliced almond pieces for a crunchy,tasty, and nutty flavor.",
                    Price = 36,
                    PictureUrl = "/images/products/biscuits-crunchoco.png",
                    Brand = "Imei",
                    Type = "Biscuits",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Kid-O Creamy Butter Cracker Sandwich",
                    Description =
                        "Ready-to-eat tasty crackers sandwich with butter-flavored cream and sugar toppings.",
                    Price = 45,
                    PictureUrl = "/images/products/biscuits-kido.png",
                    Brand = "Kid-O",
                    Type = "Biscuits",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Hershey's Milk Chocolate Bar",
                    Description =
                        "There's happy, and then there's HERSHEY'S Happy. This HERSHEY'S Chocolate Bar makes life delicious. Unwrap a bar, break off a piece, savor and repeat.",
                    Price = 39,
                    PictureUrl = "/images/products/chocolate-hersheys.png",
                    Brand = "Hersheys",
                    Type = "Chocolate",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Kit Kat Dark Chocolate Flavor",
                    Description =
                        "This dark delight is the less sweet version of the regular Kit Kat. It can be quite bitter, but if you love your chocolate dark as night, this is the KitKat for you!",
                    Price = 49,
                    PictureUrl = "/images/products/chocolate-kitkat.png",
                    Brand = "KitKat",
                    Type = "Chocolate",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Kinder Chocolate",
                    Description =
                        "A delicious treat of smooth milk chocolate with a creamy milky filling that comes in small, individually wrapped portions. It was created with kids in mind, meant to be shared by everyone, anytime, anywhere. ",
                    Price = 42,
                    PictureUrl = "/images/products/chocolate-kinder.png",
                    Brand = "Kinder",
                    Type = "Chocolate",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Toblerone Milk Chocolate Bar",
                    Description =
                        "Swiss milk chocolate with honey and almond nougat.",
                    Price = 39,
                    PictureUrl = "/images/products/chocolate-toblerone.png",
                    Brand = "Toblerone",
                    Type = "Chocolate",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Kellogg's Banana Corn Flakes",
                    Description =
                        "Go bananas and have a great start to your day with a delicious bowl of Kellogg's Banana Corn Flakes. With banana pieces that's so tasty and cripy, everyone in your family will surely love it!",
                    Price = 20,
                    PictureUrl = "/images/products/cereal-cornflakes.png",
                    Brand = "Kelloggs",
                    Type = "Cereal",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Kellogg's Coco Chex",
                    Description = "Coco Chex has a delicious chocolatey taste, in a light and crunchy criss-crossed pillow that's fun to eat. Crunch your way through breakfast with Coco Chex!",
                    Price = 20,
                    PictureUrl = "/images/products/cereal-coco.png",
                    Brand = "Kelloggs",
                    Type = "Cereal",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Kellogg's Frosties",
                    Description =
                        "Made from our classic Kellogg's Corn Flakes but with a delicious frosted coating, Frosties is truly a tasty start to the day. As a source of vitamin D, B vitamins and Iron, Frosties really are 'Grrrreaat' in more ways than one.",
                    Price = 20,
                    PictureUrl = "/images/products/cereal-frosties.png",
                    Brand = "Kelloggs",
                    Type = "Cereal",
                    QuantityInStock = 100
                },
            };

            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}