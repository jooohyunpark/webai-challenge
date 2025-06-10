# Web AI coding challenge

## Tech stasck

React, styled-components, motion, react-grid-system. Especially, motion is powerful to implement scroll-based animations. React-grid-system is used to achieve 12 column responsive flexbox system, without detailed configurations.

## Features

- All components are designed to be as declarative and reusable as possible, within the constraints of available time.
- Created FadeIn, Parallax, Card component that supports custom interactions.

## Trade-offs

- Sacrificed responsiveness due to time limitations, with a focus on micro-interactions and functionality instead.
- The toggle gallery view snaps during layout transitions. This is due to css relayout.

## If I had enough time:

- Swiper for Carousel implementation.
- Suggest design layout updates to better achieve smooth transition between carousel-gallery views, without making conflict with the copy.
- Instead of fade in/out for Gallery items, explore layout transition using framer motion. (This could be possible using recent `layout` features)
- Better resonsiveness over mobile/tablet/desktop breakpoints.
- Implement a11y best practices.
- Avoid using fixed position for gallery grid view.
