<template>
    <div class="about">
        <div class="wrapper">
            <div class="container">
                <div class="about-wrapper">
                    <div class="logo-block">
                        <div class="line">
                            <hr>
                        </div>
                        <img
                            src="../assets/img/white-logo.png"
                            alt="Agency logo"
                            width="110"
                            height="70"
                        >
                        <div class="line">
                            <hr>
                        </div>
                    </div>
                    <h4>Немного информации о Real Estate</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eligendi numquam excepturi temporibus beatae consequatur in esse tenetur dicta ad aperiam doloremque expedita ducimus, fuga, officia corporis, autem nihil vitae recusandae. Quod, delectus beatae nulla magni ullam corrupti voluptates, harum quasi cumque similique eos quidem soluta? Fuga sunt excepturi atque eaque suscipit iste incidunt voluptas!</p>
                    <div class="advantages-wrapper">
                        <div class="advantage">
                            <div class="image">
                                <img src="../assets/img/house.png" width="50" height="50">
                            </div>
                            <div class="title">Индивидуальный подход</div>
                            <hr>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur officiis est. Maiores ut alias assumenda. Rem earum voluptatibus ex nesciunt tempore maxime rerum fugiat, quos facilis velit itaque! Nam!</p>
                        </div>
                        <div class="advantage">
                            <div class="image">
                                <img src="../assets/img/profi.png" width="50" height="50">
                            </div>
                            <div class="title">Профессиональные агенты</div>
                            <hr>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi modi cum praesentium quae veritatis ea, deleniti consequatur quos placeat neque exercitationem illum obcaecati sed omnis!</p>
                        </div>
                        <div class="advantage">
                            <div class="image">
                                <img src="../assets/img/thumbs-up.png" width="50" height="50">
                            </div>
                            <div class="title">Безупречная репутация</div>
                            <hr>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ut quos dolor rem officia, et sunt. Error aliquid nemo voluptas dignissimos inventore iusto, hic porro consequuntur ex molestias. Quo eos quia iusto? Quas!</p>
                        </div>
                        <div class="advantage">
                            <div class="image">
                                <img src="../assets/img/contract.png" width="50" height="50">
                            </div>
                            <div class="title">Юридическая гарантия</div>
                            <hr>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos perferendis repellendus voluptate tempore expedita asperiores qui ullam ducimus?</p>
                        </div>
                    </div>
                    <div class="for-agents">
                        <div class="agents-annotation">
                            <h4>Как присоединиться к команде Real Estate</h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aut nemo voluptas quidem quas possimus dignissimos. Fuga perspiciatis ratione assumenda laborum. Nisi distinctio numquam itaque minima, animi placeat eius aut vero? Nobis, alias tenetur. Molestiae similique officia tempora a non itaque optio quae rerum atque nihil, illo quos laudantium corporis eos cumque. Nesciunt, quo perspiciatis tempore quam possimus id consectetur et recusandae minus pariatur sequi odio. Eius voluptates architecto obcaecati alias quae molestias accusantium facilis odio ullam?
                        </div>
                        <div class="agents-join">
                            <button>Подать заявку</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!--
    Root app component
-->

<script>
export default {
    name: "about"
};
</script>

<!--
    Common app styles
-->

<style lang="scss">
.about {
    font-family: sans-serif;
    background: url(../assets/img/about_background.png);
    background-position: center;
    margin-top: -150px;
    background-size: cover;
    .wrapper {
        background-color: #484848ab;
    }
    .container {
        padding-top: 160px;
        position: relative;
        max-width: 1200px;
        margin: auto;
        .about-wrapper {
            padding: 0 30px;
            .logo-block {
                display: flex;
                justify-content: center;
                .line {
                    width: 120px;
                    hr {
                        margin: 30px 5px;
                        border: none;
                        color: #ffdb4d;
                        background-color: #ffdb4d;
                        height: 2px;
                    }
                }
            }
            h4 {
                color: #ffdb4d;
            }
            p {
                color: white;
                padding: 0 150px;
                text-align: justify;
                text-indent: 20px;
                margin-bottom: 0;
            }
            .advantages-wrapper {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                .advantage {
                    margin: 30px 15px;
                    max-width: 20%;
                    text-align: left;
                    .title {
                        color: white;
                        text-transform: uppercase;
                        font-size: 13px;
                        padding-top: 15px;
                    }
                    hr {
                        margin: 15px 0;
                        border: none;
                        color: #ffdb4d;
                        background-color: #ffdb4d;
                        height: 1px;
                    }
                    p {
                        padding: 0;
                        text-align: left;
                        font-size: 13px;
                        text-indent: 0;
                    }
                }
            }
            .for-agents {
                display: flex;
                padding: 0 70px 40px;
                .agents-annotation {
                    color: white;
                    text-align: left;
                    font-size: 13px;
                    width: 70%;
                }
                .agents-join {
                    width: 30%;
                    display: flex;
                    justify-content: center;
                    button {
                        margin: 30px;
                        text-transform: uppercase;
                        background-color: #ffdb4d;
                        outline: none;
                        border: none;
                        font-size: 15px;
                        padding: 0 20px;
                        &:hover {
                            background-color: #7c7e7b;
                            color: #ffdb4d;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
}

// Adaptive

@media screen and (min-width: 700px) and (max-width: 900px) {
    .about-wrapper {
        p {
            padding: 0 50px !important;
        }
    }
    .advantages-wrapper {
        .advantage {
            max-width: 40% !important;
            p {
                padding: 0 !important;
            }
        }
    }
    .for-agents {
        padding: 0 50px !important;
    }
}

@media screen and (max-width: 699px) {
    .about-wrapper {
        p {
            padding: 0 !important;
        }
    }
    .advantages-wrapper {
        .advantage {
            max-width: 100% !important;
            p {
                padding: 0 !important;
            }
        }
    }
    .for-agents {
        padding: 0 !important;
    }
}

@media screen and (max-width: 900px) {
    .for-agents {
        flex-wrap: wrap;
        .agents-annotation,
        .agents-join {
            width: 100% !important;
        }
    }
    .agents-join {
        button {
            padding: 10px !important;
        }
    }
}
</style>
