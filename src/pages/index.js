import Card from "@/components/home/Card";
import CarouselComponent from "@/components/home/Carousel";
import { Inter } from "next/font/google";
// import cardData from "../store/cardData.json";
import { useEffect, useState } from "react";
import { baseUrl } from "@/utils/baseUrl";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

// const data = [
//   {
//     "id": "1",
//     "name": "MARGHERITA",
//     "category": "Pizza",
//     "foodType": "Veg",
//     "price": { "regular": "69", "medium": "159", "large": "219" },
//     "description": "A hugely popular margherita, with a deliciously tangy single cheese topping",
//     "img": "https://www.dominos.co.in/files/items/Double_Cheese_Margherita.jpg"
//   },

//   {
//     "id": "2",
//     "name": "CHICKEN DOMINATOR",
//     "category": "Pizza",
//     "foodType": "Non-Veg",
//     "price": { "regular": "69", "medium": "159", "large": "219" },
//     "description": "Treat your taste buds with Double Pepper Barbecue Chicken, Peri-Peri Chicken, Chicken Tikka & Grilled Chicken Rashers",
//     "img": "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(11).png"
//   },
//   {
//     "id": "3",
//     "name": "NON VEG SUPREME",
//     "category": "Pizza",
//     "foodType": "Non-Veg",
//     "price": { "regular": "69", "medium": "159", "large": "219" },
//     "description": "Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers",
//     "img": "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(13).png"
//   },
//   {
//     "id": "4",
//     "name": "CHICKEN PEPPERONI",
//     "category": "Pizza",
//     "foodType": "Non-Veg",
//     "price": { "regular": "69", "medium": "159", "large": "219" },
//     "description": "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
//     "img": "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(20).png"
//   },
//   {
//     "id": "5",
//     "name": "CHICKEN SAUSAGE",
//     "category": "Pizza",
//     "foodType": "Non-Veg",
//     "price": { "regular": "69", "medium": "159", "large": "219" },
//     "description": "Chicken Sausage & Cheese",
//     "img": "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(17).png"
//   },
//   {
//     "id": "6",
//     "name": "Pepper Barbecue",
//     "category": "Pizza",
//     "foodType": "Non-Veg",
//     "price": { "regular": "69", "medium": "159", "large": "219" },
//     "description": "Pepper Barbecue Chicken | Onion",
//     "img": "https://www.dominos.co.in/files/items/Pepper_Barbeque_&_Onion.jpg"
//   },
//   {
//     "id": "7",
//     "name": "FARM HOUSE",
//     "category": "Pizza",
//     "foodType": "Veg",
//     "price": { "regular": "69", "medium": "159", "large": "219" },
//     "description": "A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes",
//     "img": "https://www.dominos.co.in/files/items/Farmhouse.jpg"
//   },
//   {
//     "id": "8",
//     "name": "PEPPY PANEER",
//     "category": "Pizza",
//     "foodType": "Veg",
//     "price": { "regular": "69", "medium": "159", "large": "219" },
//     "description": "Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!",
//     "img": "https://www.dominos.co.in/files/items/Peppy_Paneer.jpg"
//   },
//   {
//     "id": "9",
//     "name": "MEXICAN GREEN WAVE",
//     "category": "Pizza",
//     "foodType": "Veg",
//     "price": { "regular": "69", "medium": "159", "large": "219" },
//     "description": "A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs.",
//     "img": "https://www.dominos.co.in/files/items/Mexican_Green_Wave.jpg"
//   },
//   {
//     "id": "10",
//     "name": "VEGGIE PARADISE",
//     "category": "Pizza",
//     "foodType": "Veg",
//     "price": { "regular": "69", "medium": "159", "large": "219" },
//     "description": "Goldern Corn, Black Olives, Capsicum & Red Paprika",
//     "img": "https://www.dominos.co.in/files/items/Digital_Veggie_Paradise_olo_266x265.jpg"
//   },
//   {
//     "id": "11",
//     "name": "STUFFED GARLIC BREAD",
//     "category": "SIDES & BEVERAGES",
//     "foodType": "Veg",
//     "price": { "single": "40", "double": "72" },
//     "description": "Freshly Baked Garlic Bread stuffed with mozzarella cheese, sweet corns & tangy and spicy jalapeños",
//     "img": "https://www.dominos.co.in/files/items/stuffed-garlic-breadstick_1346070564.webp"
//   },
//   {
//     "id": "12",
//     "name": "TACO MEXICANA VEG",
//     "category": "SIDES & BEVERAGES",
//     "foodType": "Veg",
//     "price": { "single": "40", "double": "72" },
//     "description": "A crispy flaky wrap filled with Mexican Arancini Bean Patty rolled over a creamy Harissa Sauce.",
//     "img": "https://www.dominos.co.in/files/items/Main_Menu-VG.jpg"
//   },
//   {
//     "id": "13",
//     "name": "TACO MEXICANA NON VEG",
//     "category": "SIDES & BEVERAGES",
//     "foodType": "Non-Veg",
//     "price": { "single": "40", "double": "72" },
//     "description": "A crispy flaky wrap filled with Hot and Smoky Chicken Patty rolled over a creamy Harissa Sauce.",
//     "img": "https://www.dominos.co.in/files/items/Main_Menu-NVG.jpg"
//   },
//   {
//     "id": "14",
//     "name": "GARLIC BREADSTICKS",
//     "category": "SIDES & BEVERAGES",
//     "foodType": "Veg",
//     "price": { "single": "40", "double": "72" },
//     "description": "The endearing tang of garlic in breadstics baked to perfection.",
//     "img": "https://www.dominos.co.in/files/items/garlic-bread.webp"
//   }
// ]
let data;
export async function getStaticProps() {
  console.log(baseUrl);
  try {
    const pizzaData = await fetch(baseUrl + "api/foodData", { method: "GET" })
      .then((response) => response.json())
      .catch((error) => {
        console.log(error.message);
      });
    data = await JSON.parse(JSON.stringify(pizzaData)); // step required during deployment in staticProps
    return {
      props: {
        data: data.data || null,
      },
      revalidate: 5,
    };
  } catch (error) {
    console.log(error.message);
    return {
      props : {
        data : null
      }, 
    }
  }
}

export default function Home( {data} ) {
  let categories = new Set();
  let categoryArray;
  const [typeFilter, setTypeFilter] = useState(false);
  const foodData = [];
  const handleData = () => {
    data?.map((data) => {
      return foodData.push(data), categories.add(data.category);
    });
  };

  handleData();
  useEffect(() => {
    localStorage.setItem("isAdmin", false); //added this line here to prevent anyone from accessing /admin if not logged in.
  }, []);

  categoryArray = [...categories];

  return (
    <>
      <Head>
        <title>PizzaWizza</title>
      </Head>
      <CarouselComponent />
      <div className="container mx-auto">
        <div className="my-6 space-x-5">
          <button
            className={`border-white rounded-full dark:border-white border-2 py-1 px-3 ${
              !typeFilter && "bg-slate-600 dark:bg-slate-600"
            } `}
            onClick={() => setTypeFilter(false)}
          >
            All
          </button>
          <button
            className={`border-white rounded-full dark:border-white border-2 py-1 px-3 ${
              typeFilter === "Veg" && "bg-slate-600 dark:bg-slate-600"
            } `}
            onClick={() => {
              setTypeFilter("Veg");
            }}
          >
            <span
              className={
                "lowercase font-thin bg-white border-green-500 border mr-2 px-0.1 text-green-500"
              }
            >
              ●
            </span>
            Veg
          </button>
          <button
            className={`border-white rounded-full dark:border-white border-2 py-1 px-3 ${
              typeFilter === "Non-Veg" && "bg-slate-600 dark:bg-slate-600"
            } `}
            onClick={() => {
              setTypeFilter("Non-Veg");
            }}
          >
            <span
              className={
                "lowercase font-thin bg-white border-red-500 border mr-2 px-0.1 text-red-500"
              }
            >
              ●
            </span>
            Non Veg
          </button>
        </div>
        {categoryArray.map((category) => {
          return (
            <>
              <div
                key={category}
                className=" text-4xl mt-10 mb-3 uppercase font-bold"
              >
                {category}
              </div>
              <hr />
              <div className="flex flex-col items-center justify-center">
                <div className=" grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                  {foodData
                    ?.filter((foodData) => category === foodData.category)
                    ?.filter((foodData) =>
                      typeFilter ? typeFilter === foodData.foodType : foodData
                    )
                    ?.map((data) => {
                      return <Card key={data.name} foodData={data} />;
                    })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
