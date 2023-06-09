import { React, useState, createContext } from "react";

// creating a context that React components will be able to read from
export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const addRestaurant = (restaurant) => {
    // take all the current restaurants and append the new restaurant to the end
    setRestaurants([...restaurants, restaurant]);
  };

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: restaurants,
        setRestaurants: setRestaurants,
        addRestaurant: addRestaurant,
        selectedRestaurant: selectedRestaurant,
        setSelectedRestaurant: setSelectedRestaurant,
      }}
    >
      {props.children}
    </RestaurantsContext.Provider>
  );
};
// Code Explanation //
// 1. Creating RestaurantsContextProvider as a component that will return a RestaurantsContext.Provider component.
// 2. The RestaurantsContext.Provider component is used to provide the context to its descendants.
// 3. Inside of RestaurantsContextProvider we use a useState hook to define the restaurants state variable and
//    the setRestaurants function to update restaurants state variable.
// 4. The RestaurantsContext.Provider component is returned with a value prop, which is set to an object that
//    contains the restaurants state variable and the setRestaurants function. The props.children is used to
//    render any components that are passed as chiildren to the RestaurantsContextProvider.
// Any component wrapped with RestaurantsContextProvider will have access to the RestaurantsContext,
// which contains the values being passed in
