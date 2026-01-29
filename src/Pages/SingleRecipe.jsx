const SingleRecipe = () => {
  return (
    <div className="p-6 bg-[#F9F9F9] sm:px-8 md:px-12 lg:px-20">
      <h1 className="text-4xl font-extrabold font-playfair leading-11 md:text-5xl md:pt-5 lg:text-6xl lg:pt-5">
        Strawberry Cream Cheesecake
      </h1>

      <h3 className="mt-4 mb-4 text-md md:text-lg md:mt-7 lg:text-xl lg:mt-7">
        One thing I learned living in the Canarsie section of Brooklyn, NY was
        how to cook a good Italian meal. Here is a recipe I created after having
        this dish in a restaurant. Enjoy!
      </h3>
      <img
        className="mt-4 mb-4 rounded-xl object-cover h-64 sm:h-80 md:h-128 lg:h-148 lg:rounded-2xl w-full"
        src="https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D"
      />
      <div className="flex justify-start gap-16 items-center ">
        <div className="flex flex-col justify-center ">
          <h4 className="text-[#2b2828ce]">PREP TIME</h4>
          <h4 className="font-semibold">15 MIN</h4>
        </div>
        <div className="flex flex-col justify-center ">
          <h4 className="text-[#2b2828ce]">SERVINGS</h4>
          <h4 className="font-semibold">4 PEOPLE</h4>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="mt-7 md:flex-3">
          <h1 className=" mb-5 text-4xl font-playfair font-extrabold">
            Ingredients
          </h1>

          <ol className="text-xl list-disc px-6 marker:text-[#473328] space-y-4 text-[#1d1b1b]">
            <li>400g graham crackers</li>
            <li>400g graham crackers</li>
            <li>400g graham crackers</li>
            <li>400g graham crackers</li>
            <li>400g graham crackers</li>
          </ol>
        </div>
        <div className="mt-7 md:flex-7">
          <h1 className=" mb-5 text-4xl font-playfair font-extrabold">
            Instructions
          </h1>
          <ol className="text-xl mb-9 list-decimal list-outside px-6 marker:font-pacifico marker:text-[#000000] marker:font-medium space-y-5 text-[#1d1b1b]">
            <li>
              To prepare crust add graham crackers to a food processor and
              process until you reach fine crumbs. Add melted butter and pulse
              3-4 times to coat crumbs with butter.
            </li>
            <li>
              Pour mixture into a 20cm (8”) tart tin. Use the back of a spoon to
              firmly press the mixture out across the bottom and sides of the
              tart tin. Chill for 30 min.
            </li>
            <li>
              Begin by adding the marshmallows and melted butter into a
              microwave safe bowl. Microwave for 30 seconds and mix to combine.
              Set aside.
            </li>
            <li>
              Next, add the gelatine and water to a small mixing bowl and mix to
              combine. Microwave for 30 seconds.
            </li>
            <li>
              Add the cream cheese to the marshmallow mixture and use a hand
              mixer or stand mixer fitted with a paddle attachment to mix until
              smooth.
            </li>
            <li>
              Pour half the purple cheesecake mixture into the chill tart crust.
              Add half the blue and then add the remaining purple and blue in
              the tart tin. Use a spoon to drizzle some pink cheesecake on top.
              Use a skewer or the end of a spoon to swirl the pink. Add some
              small dots of the plain cheesecake mixture to create stars and
              then sprinkle some more starts on top before chilling for 2 hours.
            </li>
            <li>Slice with a knife to serve.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
