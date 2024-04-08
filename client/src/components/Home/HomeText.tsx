import { useState } from "react";

const HomeText = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="container font-inter lg:w-[65%] mb-10">
      <h1 className="mb-3 text-2xl font-semibold text-zinc-600 dark:text-zinc-200">
        Our motto
      </h1>
      <div className="text-sm text-zinc-700 dark:text-zinc-200">
        The relationship between a pet owner and their pet is transformative and
        unique, involving a lot of emotional connection. Thinking of making this
        bond even better, Petopia's Pet Shop offers products from the leading
        brands in the market.
        <br />
        <br />
      </div>
      <div className={` flex-col gap-4 ${isOpen ? "flex" : "hidden"}`}>
        <section className="text-sm text-zinc-700 dark:text-zinc-200">
          All this variety is designed so that pet owners don't have to leave
          home to find what they need on a daily basis. Faced with over twenty
          thousand product options, the online pet store is organized by
          categories, which use criteria such as species and type of article.
          Learn more below.
          <br />
          <br />
          "Everything pets need at any time of the day" is one of the main
          mottos of Petopia's online pet shop. Convenience is being available
          24/7. Thus, pet owners know they can count on this assistance to take
          care of their furry friends' health and comfort whenever they need it.
          After all, spoiling those who are the reason for our affection is
          never too much.
          <br />
          <br />
          The products and services available in the pet shop reflect the
          passion for pets. Therefore, they are treated with great care and
          respect, offering high-quality items, worthy of all the love they
          deserve. All of this is organized and explained to make life easier
          for pet owners.
        </section>
        <section className="">
          <h2 className="mb-3 text-lg font-semibold text-zinc-600 dark:text-zinc-200">
            Dogs: food, medications, and other items
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            Canine friends are true companions and require some basic care, such
            as feeding. Currently, there is a wide variety of dog food and
            treats to include in their diet. Some are even specific for certain
            breeds and health conditions.
          </p>
        </section>
        <section className="">
          <h2 className="mb-3 text-lg font-semibold text-zinc-600 dark:text-zinc-200">
            Cats: litter, toys, and other products
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            In addition to the richness of alternatives of food and medicines
            for felines, the catalog is also rich in other cat products. Among
            them, many litters and litter boxes for hygiene, offering more
            comfort when they need to do their basic needs. There is no shortage
            of options for materials for you to choose the one that suits your
            feline best. <br />
            <br /> Moreover, it is essential to bring more joy to the daily
            lives of kittens with toys and other accessories, such as scratching
            posts. By using these tools, pet owners can stimulate their pets'
            minds, making them have a better quality of life and longevity.
          </p>
        </section>
        <section className="">
          <h2 className="mb-3 text-lg font-semibold text-zinc-600 dark:text-zinc-200">
            Diversity of items for other pets
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            Dogs and cats are the main pets in people's homes, but that doesn't
            mean there aren't other little animals. In the store, there are
            products for pets such as fish, rodents, birds, and even some
            reptiles. To find these options, simply browse the catalog. <br />
            <br /> In this context, it is possible to find in the pet shop
            cleaning products, food, medications, and even houses and cages for
            the greater comfort of these pets. As each little animal requires
            specific care, the pet owner may need the guidance of a specialist.
            <br />
            <br />
            Have an amazing shopping experience at Petopia! This is just a
            sample of everything Petopia's online Pet Shop can offer. Don't
            waste time and start exploring the categories to find that dose of
            affection your companion needs. Here, taking care of pets is a
            pleasure and a source of joy.
          </p>
        </section>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-4 text-sm text-zinc-700 dark:text-zinc-200 hover:underline"
      >
        {isOpen ? "Close" : "Read more"}
      </button>
    </article>
  );
};
export default HomeText;
