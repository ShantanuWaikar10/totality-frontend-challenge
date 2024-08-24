# Totality Frontend Challenge

## Introduction

This is a property booking web application where user can view the properties and add the filters according to location, prices, beds and amenities. User can book the properties by clicking "Book Now" button at below. After booking, user can view the properties what they have booked and increase and decrease the property quantity. The total price will change according to increase and decrease the property quantity.

This application has a login and register functionality. When a user login they will able to see their name at top and signup and signin buttons will be replaced with logout button

## Tech stack used

- **Frontend**: Next.js, Tailwind CSS, Redux Toolkit.
- **Backend and Database**: Next.js, MongoDB with Mongoose.
- **Authentication**: NextAuth.
- **Deployment**: Vercel for serverless deployment.

## Approach

- **Displaying Filter Card**: The filter card allows users to refine and narrow down search results based on specific criteria such as locations, price ranges, beds, and amenities. This feature enhances the user experience by enabling targeted and efficient browsing. The filter card is designed to be intuitive and user-friendly, positioned in a sidebar. The filtering logic is applied in real-time as users adjust the filters. The data set is filtered according to the selected criteria and displayed dynamically.

- **Add Item to Cart**: The "Add to Cart" feature allows users to select property they wish to purchase and save them in a booking cart, providing a seamless booking experience. I use Redux Toolkit to manage the cart state globally, allowing different components to interact with the cart. The "Book Now" button is integrated with the product display components, dispatching the addItem action when clicked. The cart provides instant feedback to users by updating the cart icon or displaying a confirmation message when an property is added.

- **User Login and Register**: User authentication is essential for personalized experiences, allowing users to log in, access their accounts, and register for new accounts. Both the login and registration forms include client-side validation. Server-side errors (e.g., invalid credentials, email already in use) are captured and displayed to the user.
