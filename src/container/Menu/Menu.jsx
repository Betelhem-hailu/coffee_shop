import React, { useEffect } from 'react';
import $ from 'jquery';

import { data } from "../../constants";
import { SubHeading } from "../../components";
import './menu.css';

const ProductCard = ({ drink: { imgUrl, title, price, description, color } }) => (
    <div className='app__menu-card'>
        <img src={imgUrl} alt="drink" />
        <div className='app_menu-card_content' data-color-sec={color}>
            <p className='p__cormorant title'>{title}</p>
            <div className='content'>
                <p className='p__opensans'>{description}</p>
                <p className='p__cormorant'>{price}</p>
            </div>
        </div>
    </div>
)

const Menus = () => {
    useEffect(() => {
        $(document).ready(() => {
            $(".app__menu-card").hover(function () {
                // On hover
                $(this).addClass("active");

                // Decrease size and move to the top
                //   $(this).css("transform", "scale(1)");
                $(this).find("img").css("transform", "scale(0.5) translateY(-100%");

                // Add contents (description and price) to the center
                $(this).find(".content").css({
                    "display": "flex",
                    "width": "100%",
                    "flex-direction": "column",
                    "justify-content": "center",
                    "text-align": "center",
                    "transform": "translateY(-80%)",
                });

                $(this).find(".title").css({
                    "transform": "translateY(-350%)",
                });

                // Set background color and border color
                $(".overlay").css("background", $(this).find("div").attr("data-color-sec"));
                $(".app__menu-card").css("background",$(this).find("div").attr("data-color-sec"));
                $(".active").css("border-color", $(this).find("div").attr("data-color-sec"));
            }, function () {
                // On hover out
                $(this).removeClass("active");

                // Reset transformations
                $(this).find("img").css("transform", "none");

                // Hide contents
                $(this).find(".content").css({
                    "display": "none",
                    "transform": "none",
                });
                $(this).find(".title").css({
                    "transform": "none",
                });
                // Reset background color and border color
                $(".overlay").css("background", "");
                $(".app__menu-card").css("background", "");
                $(".active").css("border-color", "");
            });
        });
    }, []);

    return (
        <div className='app__bg' id='menu'>
            <div className='app__wrapper overlay'>
                <div className='section__padding'>
                    <div className='app__wrapper_info'>
                        <SubHeading title="Dare to Discover Bold New Flavours" />
                        <h1 className='headtext__cormorant '>Best selling coffees</h1>
                        <div className='app__menu'>
                            {data.drinks.map((drink) => <ProductCard drink={drink} key={drink.title} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menus;