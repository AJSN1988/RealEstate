<!--
    Filter template
-->

<template>
    <div class="obj-filter" id="filter">
        <div class="container">
            <div class="filter-wrapper">
                <div class="filter" @click="closePopups()">
                    <h3 v-if="!filter.objLocation.length">Вся доступная недвижимость</h3>
                    <h3
                        v-if="filter.objLocation.length == 1"
                    >{{`Недвижимость в г. ${filter.objLocation[0].name}`}}</h3>
                    <h3
                        v-if="filter.objLocation.length > 1"
                    >{{`Недвижимость в нескольких городах (выбрано - ${filter.objLocation.length})`}}</h3>
                    <div class="selectors-wrapper">
                        <div class="selector-wrapper">
                            <div
                                class="selector"
                                @mouseover="shakeIcon"
                                @click.stop="managePopup('objType')"
                            >
                                <div class="selector-title">{{options.objType.viewport}}</div>
                                <img
                                    src="../assets/img/right.png"
                                    alt="List icon"
                                    width="15"
                                    height="15"
                                    v-bind:class="{rotate: options.objType.showed}"
                                >
                            </div>
                            <transition name="showList">
                                <div class="options" id="typeOptions" v-if="options.objType.showed">
                                    <ul>
                                        <li
                                            v-for="(option, index) in options.objType.content.options"
                                            :key="index"
                                            @click.stop="setOptionValueFromList(option, 'objType')"
                                            v-bind:class="{selected : option == filter.objType}"
                                        >
                                            <span>{{option}}</span>
                                        </li>
                                    </ul>
                                </div>
                            </transition>
                        </div>
                        <div class="selector-wrapper">
                            <div
                                class="selector"
                                @mouseover="shakeIcon"
                                @click.stop="managePopup('dealType')"
                            >
                                <div class="selector-title">{{options.dealType.viewport}}</div>
                                <img
                                    src="../assets/img/right.png"
                                    alt="List icon"
                                    width="15"
                                    height="15"
                                    v-bind:class="{rotate: options.dealType.showed}"
                                >
                            </div>
                            <transition name="showList">
                                <div
                                    class="options"
                                    id="typeOptions"
                                    v-if="options.dealType.showed"
                                >
                                    <ul>
                                        <li
                                            v-for="(option, index) in options.dealType.content.options"
                                            :key="index"
                                            @click.stop="setOptionValueFromList(option, 'dealType')"
                                            v-bind:class="{selected : option == filter.dealType}"
                                        >
                                            <span>{{option}}</span>
                                        </li>
                                    </ul>
                                </div>
                            </transition>
                        </div>
                        <div class="selector-wrapper">
                            <div class="selector location-input" @mouseover="shakeIcon">
                                <input
                                    type="text"
                                    name="Location inpur"
                                    pattern="[А-Яа-яЁё]"
                                    id="locationInput"
                                    v-model="options.objLocation.value"
                                    :placeholder="options.objLocation.viewport"
                                >
                                <img
                                    src="../assets/img/writing.png"
                                    alt="Location icon"
                                    width="15"
                                    height="15"
                                    v-if="!options.objLocation.value.length"
                                >
                                <img
                                    src="../assets/img/clear.png"
                                    alt="Clear input icon"
                                    width="15"
                                    height="15"
                                    v-if="options.objLocation.value.length > 0"
                                    @click="clearInput('objLocation')"
                                >
                            </div>
                            <p style="display: none">{{foundLocations}}</p>
                            <transition name="showList">
                                <div
                                    class="options locations"
                                    id="typeOptions"
                                    v-if="options.objLocation.showed"
                                >
                                    <ul class="location-list">
                                        <li
                                            v-for="(city, index) in options.objLocation.locations"
                                            :key="index"
                                            @click.stop="setOptionValueFromList(city, 'objLocation'); options.objLocation.value = ''"
                                        >
                                            <div class="location-info">
                                                <p class="name">{{city.name}}</p>
                                                <p class="subject">{{city.subject}}</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </transition>
                        </div>
                        <div class="selector-wrapper">
                            <div
                                class="selector"
                                @mouseover="shakeIcon"
                                @click.stop="managePopup('objPrice')"
                            >
                                <div class="selector-title">{{options.objPrice.viewport}}</div>
                                <img
                                    src="../assets/img/ruble.png"
                                    alt="List icon"
                                    width="15"
                                    height="15"
                                >
                            </div>
                            <transition name="showList">
                                <div
                                    class="options"
                                    id="typeOptions"
                                    v-if="options.objPrice.showed"
                                    @click.stop="1+1"
                                >
                                    <div class="key-inputs">
                                        <input
                                            type="number"
                                            name="Min price"
                                            id="minPrice"
                                            required
                                            pattern="[0-9]"
                                            placeholder="0"
                                            v-model="options.objPrice.min"
                                        >
                                        <input
                                            type="number"
                                            name="Max price"
                                            id="maxPrice"
                                            required
                                            pattern="[0-9]"
                                            placeholder="100000000"
                                            v-model="options.objPrice.max"
                                        >
                                    </div>
                                    <div class="options-controls">
                                        <button
                                            class="submit"
                                            @click="setRange('objPrice', 'Стоимость', 'млн.', 0, 100000000)"
                                        >Подтвердить</button>
                                        <button
                                            class="reset"
                                            @click="resetRange('objPrice', 'Стоимость', 0, 100000000)"
                                        >Сбросить</button>
                                    </div>
                                </div>
                            </transition>
                        </div>
                    </div>
                    <div class="extra-options">
                        <div class="wrapper" v-if="showExtra">
                            <div class="square">
                                <div
                                    class="selector"
                                    @mouseover="shakeIcon"
                                    @click.stop="managePopup('objSquare')"
                                >
                                    <div class="selector-title">{{options.objSquare.viewport}}</div>
                                    <img
                                        src="../assets/img/cube.png"
                                        alt="List icon"
                                        width="15"
                                        height="15"
                                    >
                                </div>
                                <transition name="showList">
                                    <div
                                        class="options"
                                        id="typeOptions"
                                        v-if="options.objSquare.showed"
                                        @click.stop="1+1"
                                    >
                                        <div class="key-inputs">
                                            <input
                                                type="number"
                                                name="Min square"
                                                id="minSquare"
                                                required
                                                pattern="[0-9]"
                                                placeholder="10"
                                                v-model="options.objSquare.min"
                                            >
                                            <input
                                                type="number"
                                                name="Max square"
                                                id="maxSquare"
                                                required
                                                pattern="[0-9]"
                                                placeholder="1000"
                                                v-model="options.objSquare.max"
                                            >
                                        </div>
                                        <div class="options-controls">
                                            <button
                                                class="submit"
                                                @click="setRange('objSquare', 'Площадь', 'кв. м.', 10, 1000)"
                                            >Подтвердить</button>
                                            <button
                                                class="reset"
                                                @click="resetRange('objSquare', 'Площадь', 10, 1000)"
                                            >Сбросить</button>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                            <div class="floor">
                                <div
                                    class="selector"
                                    @mouseover="shakeIcon"
                                    @click.stop="managePopup('objFloor')"
                                    v-if="filter.objType != 'Коммерческая недвижимость'"
                                >
                                    <div class="selector-title">{{options.objFloor.viewport}}</div>
                                    <img
                                        src="../assets/img/floors.png"
                                        alt="List icon"
                                        width="15"
                                        height="15"
                                    >
                                </div>
                                <div class="selector disabled" @mouseover="shakeIcon" v-else>
                                    <div class="selector-title">{{options.objFloor.viewport}}</div>
                                    <img
                                        src="../assets/img/disabled.png"
                                        alt="List icon"
                                        width="15"
                                        height="15"
                                    >
                                </div>
                                <transition name="showList">
                                    <div
                                        class="options"
                                        id="typeOptions"
                                        v-if="options.objFloor.showed"
                                        @click.stop="1+1"
                                    >
                                        <div class="key-inputs">
                                            <input
                                                type="number"
                                                name="Min floor"
                                                id="minFloor"
                                                required
                                                pattern="[0-9]"
                                                placeholder="1"
                                                v-model="options.objFloor.min"
                                            >
                                            <input
                                                type="number"
                                                name="Max floor"
                                                id="maxFloor"
                                                required
                                                pattern="[0-9]"
                                                placeholder="30"
                                                v-model="options.objFloor.max"
                                            >
                                        </div>
                                        <div class="options-controls">
                                            <button
                                                class="submit"
                                                @click="setRange('objFloor', 'Этаж', '', 1, 30)"
                                            >Подтвердить</button>
                                            <button
                                                class="reset"
                                                @click="resetRange('objFloor', 'Этаж', 1, 30)"
                                            >Сбросить</button>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                            <div class="room">
                                <div
                                    class="selector"
                                    @mouseover="shakeIcon"
                                    @click.stop="managePopup('objRoom')"
                                    v-if="filter.objType != 'Коммерческая недвижимость'"
                                >
                                    <div class="selector-title">{{options.objRoom.viewport}}</div>
                                    <img
                                        src="../assets/img/right.png"
                                        alt="List icon"
                                        width="15"
                                        height="15"
                                        v-bind:class="{rotate: options.objRoom.showed}"
                                    >
                                </div>
                                <div class="selector disabled" @mouseover="shakeIcon" v-else>
                                    <div class="selector-title">{{options.objRoom.viewport}}</div>
                                    <img
                                        src="../assets/img/disabled.png"
                                        alt="List icon"
                                        width="15"
                                        height="15"
                                    >
                                </div>
                                <transition name="showList">
                                    <div
                                        class="options"
                                        id="typeOptions"
                                        v-if="options.objRoom.showed"
                                        @click.stop="1+1"
                                    >
                                        <ul>
                                            <li
                                                v-for="(element, index) in options.objRoom.list"
                                                :key="index"
                                                class="room-li"
                                            >
                                                <div class="rooms">
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            :id="element.rooms"
                                                            :value="element.rooms"
                                                            v-model="options.objRoom.selected"
                                                        >
                                                        {{element.name}}
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="options-controls room-controls">
                                            <button
                                                class="submit"
                                                @click="setFloorFilter"
                                            >Подтвердить</button>
                                            <button class="reset" @click="resetFloorFilter">Сбросить</button>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                            <div class="extra">
                                <div
                                    class="selector"
                                    @mouseover="shakeIcon"
                                    @click.stop="managePopup('objExtra')"
                                    v-if="filter.objType != 'Коммерческая недвижимость'"
                                >
                                    <div class="selector-title">{{options.objExtra.viewport}}</div>
                                    <img
                                        src="../assets/img/house_options.png"
                                        alt="List icon"
                                        width="15"
                                        height="15"
                                    >
                                </div>
                                <div class="selector disabled" @mouseover="shakeIcon" v-else>
                                    <div class="selector-title">{{options.objExtra.viewport}}</div>
                                    <img
                                        src="../assets/img/disabled.png"
                                        alt="List icon"
                                        width="15"
                                        height="15"
                                    >
                                </div>
                                <transition name="showList">
                                    <div
                                        class="options"
                                        id="typeOptions"
                                        v-if="options.objExtra.showed"
                                        @click.stop="1+1"
                                    >
                                        <div
                                            class="groups-list"
                                            v-if="filter.objType == 'Квартиры' || filter.objType == 'Апартаменты'"
                                        >
                                            <div class="flat-group">
                                                <div class="type-building">
                                                    <span
                                                        @click="buildingType('Все')"
                                                        :class="{active : filter.objExtra.typeBuilds.allBuilds}"
                                                    >Все</span>
                                                    <span
                                                        @click="buildingType('Новостройки')"
                                                        :class="{active : filter.objExtra.typeBuilds.newBuilds}"
                                                    >Новостройки</span>
                                                    <span
                                                        @click="buildingType('Вторичный рынок')"
                                                        :class="{active : filter.objExtra.typeBuilds.usedBuilds}"
                                                    >Вторичный рынок</span>
                                                </div>
                                                <div class="build-date">
                                                    <div
                                                        class="age-data"
                                                        v-if="filter.objExtra.typeBuilds.newBuilds"
                                                    >
                                                        <span>Заселение до</span>
                                                        <div class="input-block">
                                                            <button
                                                                @click="options.objExtra.yearWillComplite++"
                                                            >
                                                                <img
                                                                    src="../assets/img/plus.png"
                                                                    alt="Plus button"
                                                                    width="10"
                                                                    height="10"
                                                                >
                                                            </button>
                                                            <span
                                                                class="label"
                                                            >{{yearWillCompliteComputed}}</span>
                                                            <button
                                                                @click="options.objExtra.yearWillComplite--"
                                                            >
                                                                <img
                                                                    src="../assets/img/minus.png"
                                                                    alt="Minus button"
                                                                    width="10"
                                                                    height="10"
                                                                >
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="age-data"
                                                        v-if="filter.objExtra.typeBuilds.usedBuilds || filter.objExtra.typeBuilds.allBuilds"
                                                    >
                                                        <span>Возраст дома</span>
                                                        <div class="input-block">
                                                            <button
                                                                @click="options.objExtra.ageBuild++"
                                                            >
                                                                <img
                                                                    src="../assets/img/plus.png"
                                                                    alt="Plus button"
                                                                    width="10"
                                                                    height="10"
                                                                >
                                                            </button>
                                                            <span class="label">{{ageBuildComputed}}</span>
                                                            <button
                                                                @click="options.objExtra.ageBuild--"
                                                            >
                                                                <img
                                                                    src="../assets/img/minus.png"
                                                                    alt="Minus button"
                                                                    width="10"
                                                                    height="10"
                                                                >
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="build-category">
                                                    <div
                                                        class="title"
                                                        @click="options.objExtra.buildCategory.showed = !options.objExtra.buildCategory.showed"
                                                    >
                                                        <span>Категория дома</span>
                                                        <img
                                                            src="../assets/img/right.png"
                                                            alt="List icon"
                                                            width="10"
                                                            height="10"
                                                            v-bind:class="{rotate: options.objExtra.buildCategory.showed}"
                                                        >
                                                    </div>
                                                    <div
                                                        class="categories-list"
                                                        v-if="options.objExtra.buildCategory.showed"
                                                    >
                                                        <ul>
                                                            <li
                                                                v-for="(cat, index) in options.objExtra.buildCategory.categories"
                                                                :key="index"
                                                            >
                                                                <div class="category">
                                                                    <label>
                                                                        <input
                                                                            type="checkbox"
                                                                            :value="cat"
                                                                            v-model="options.objExtra.buildCategory.selectedCategories"
                                                                        >
                                                                        {{cat}}
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="build-condition">
                                                    <div
                                                        class="title"
                                                        @click="options.objExtra.buildCondition.showed = !options.objExtra.buildCondition.showed"
                                                    >
                                                        <span>Состояние помещений</span>
                                                        <img
                                                            src="../assets/img/right.png"
                                                            alt="List icon"
                                                            width="10"
                                                            height="10"
                                                            v-bind:class="{rotate: options.objExtra.buildCondition.showed}"
                                                        >
                                                    </div>
                                                    <div
                                                        class="categories-list"
                                                        v-if="options.objExtra.buildCondition.showed"
                                                    >
                                                        <ul>
                                                            <li
                                                                v-for="(cat, index) in options.objExtra.buildCondition.conditions"
                                                                :key="index"
                                                            >
                                                                <div class="category">
                                                                    <label>
                                                                        <input
                                                                            type="checkbox"
                                                                            :value="cat"
                                                                            v-model="options.objExtra.buildCondition.selectedConditions"
                                                                        >
                                                                        {{cat}}
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="groups-list"
                                            v-if="filter.objType == 'Загородные дома' || filter.objType == 'Дачные дома'"
                                        >
                                            <div class="house-group">
                                                <div class="build-date">
                                                    <div class="age-data">
                                                        <span>Возраст дома</span>
                                                        <div class="input-block">
                                                            <button
                                                                @click="options.objExtra.ageBuild++"
                                                            >
                                                                <img
                                                                    src="../assets/img/plus.png"
                                                                    alt="Plus button"
                                                                    width="10"
                                                                    height="10"
                                                                >
                                                            </button>
                                                            <span class="label">{{ageBuildComputed}}</span>
                                                            <button
                                                                @click="options.objExtra.ageBuild--"
                                                            >
                                                                <img
                                                                    src="../assets/img/minus.png"
                                                                    alt="Minus button"
                                                                    width="10"
                                                                    height="10"
                                                                >
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="square">
                                                    <div class="square-data">
                                                        <span>Площадь участка</span>
                                                        <div class="input-block">
                                                            <button
                                                                @click="options.objExtra.houseSquare++"
                                                            >
                                                                <img
                                                                    src="../assets/img/plus.png"
                                                                    alt="Plus button"
                                                                    width="10"
                                                                    height="10"
                                                                >
                                                            </button>
                                                            <span
                                                                class="label"
                                                            >{{houseSquareComputed}}</span>
                                                            <button
                                                                @click="options.objExtra.houseSquare--"
                                                            >
                                                                <img
                                                                    src="../assets/img/minus.png"
                                                                    alt="Minus button"
                                                                    width="10"
                                                                    height="10"
                                                                >
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="build-category">
                                                    <div
                                                        class="title"
                                                        @click="options.objExtra.houseCategory.showed = !options.objExtra.houseCategory.showed"
                                                    >
                                                        <span>Категория дома</span>
                                                        <img
                                                            src="../assets/img/right.png"
                                                            alt="List icon"
                                                            width="10"
                                                            height="10"
                                                            v-bind:class="{rotate: options.objExtra.houseCategory.showed}"
                                                        >
                                                    </div>
                                                    <div
                                                        class="categories-list"
                                                        v-if="options.objExtra.houseCategory.showed"
                                                    >
                                                        <ul>
                                                            <li
                                                                v-for="(cat, index) in options.objExtra.houseCategory.categories"
                                                                :key="index"
                                                            >
                                                                <div class="category">
                                                                    <label>
                                                                        <input
                                                                            type="checkbox"
                                                                            :value="cat"
                                                                            v-model="options.objExtra.houseCategory.selectedCategories"
                                                                        >
                                                                        {{cat}}
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="build-category">
                                                    <div
                                                        class="title"
                                                        @click="options.objExtra.houseCondition.showed = !options.objExtra.houseCondition.showed"
                                                    >
                                                        <span>Состояние помещений</span>
                                                        <img
                                                            src="../assets/img/right.png"
                                                            alt="List icon"
                                                            width="10"
                                                            height="10"
                                                            v-bind:class="{rotate: options.objExtra.houseCondition.showed}"
                                                        >
                                                    </div>
                                                    <div
                                                        class="categories-list"
                                                        v-if="options.objExtra.houseCondition.showed"
                                                    >
                                                        <ul>
                                                            <li
                                                                v-for="(cat, index) in options.objExtra.houseCondition.conditions"
                                                                :key="index"
                                                            >
                                                                <div class="category">
                                                                    <label>
                                                                        <input
                                                                            type="checkbox"
                                                                            :value="cat"
                                                                            v-model="options.objExtra.houseCondition.selectedConditions"
                                                                        >
                                                                        {{cat}}
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="options-controls">
                                            <button class="submit" @click="setExtra">Подтвердить</button>
                                            <button class="reset" @click="resetExtra">Сбросить</button>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                        </div>
                        <button @click="showExtra = !showExtra" v-if="!showExtra">
                            <img
                                src="../assets/img/options.png"
                                alt="Extra options logo"
                                width="11"
                                height="11"
                            >
                            Показать фильтры
                        </button>
                        <button @click="showExtra = !showExtra" v-if="showExtra">
                            <img
                                src="../assets/img/delete.png"
                                alt="Extra options logo"
                                width="11"
                                height="11"
                            >
                            Скрыть фильтры
                        </button>
                    </div>
                    <div class="footer">
                        <div class="selected-locations">
                            <div
                                class="location computed-location"
                                v-if="!filter.objLocation.length"
                            >Все населенные пункты (для уточнения поиска воспользуйтесь фильтрами)</div>
                            <div
                                class="location"
                                v-for="(location, index) in filter.objLocation"
                                :key="index"
                            >
                                {{location.name}}
                                <span @click="deleteLocation(index)">
                                    <img
                                        src="../assets/img/delete-white.png"
                                        alt="Delete location icon"
                                        width="8"
                                        height="8"
                                    >
                                </span>
                            </div>
                        </div>
                        <div class="results">
                            <router-link
                                v-if="filtredObjects.length"
                                :to="{ name: 'Objects', params: { objects: filtredObjects } }"
                            >
                                <button class="search-btn">{{foundObjects}}</button>
                            </router-link>
                            <button
                                class="search-btn disabled"
                                v-if="!filtredObjects.length"
                                disabled
                            >{{foundObjects}}</button>
                        </div>
                    </div>
                </div>
                <div class="mobile-filter">
                    <h3 v-if="!filter.objLocation.length">Вся доступная недвижимость</h3>
                    <h3
                        v-if="filter.objLocation.length == 1"
                    >{{`Недвижимость в г. ${filter.objLocation[0].name}`}}</h3>
                    <h3
                        v-if="filter.objLocation.length > 1"
                    >{{`Недвижимость в нескольких городах (выбрано - ${filter.objLocation.length})`}}</h3>
                    <div class="type-header">
                        <h5>Выберите тип объекта</h5>
                    </div>
                    <div class="obj-types-wrapper">
                        <div
                            class="obj-type-mobile"
                            v-for="(option, index) in options.objType.content.options"
                            :key="index"
                            @click.stop="setOptionValueFromList(option, 'objType')"
                            v-bind:class="{selected : option == filter.objType}"
                        >{{option}}</div>
                    </div>
                    <div class="type-header">
                        <h5>Выберите тип сделки</h5>
                    </div>
                    <div class="deal-type-wrapper">
                        <div
                            class="deal-type-mobile"
                            v-for="(option, index) in options.dealType.content.options"
                            :key="index"
                            @click.stop="setOptionValueFromList(option, 'dealType')"
                            v-bind:class="{selected : option == filter.dealType}"
                        >{{option}}</div>
                    </div>
                    <div class="type-header">
                        <h5>Укажите населенный пункт</h5>
                    </div>
                    <div class="location-wrapper">
                        <div class="location-mobile">
                            <div class="selector location-input" @mouseover="shakeIcon">
                                <input
                                    type="text"
                                    name="Location inpur"
                                    pattern="[А-Яа-яЁё]"
                                    id="locationInput"
                                    v-model="options.objLocation.value"
                                    :placeholder="options.objLocation.viewport"
                                >
                                <img
                                    src="../assets/img/writing.png"
                                    alt="Location icon"
                                    width="15"
                                    height="15"
                                    v-if="!options.objLocation.value.length"
                                >
                                <img
                                    src="../assets/img/clear.png"
                                    alt="Clear input icon"
                                    width="15"
                                    height="15"
                                    v-if="options.objLocation.value.length > 0"
                                    @click="clearInput('objLocation')"
                                >
                                <p style="display: none">{{foundLocations}}</p>
                                <transition name="showList">
                                    <div
                                        class="options mobile-locations-list"
                                        id="typeOptions"
                                        v-if="options.objLocation.showed"
                                    >
                                        <ul class="location-list">
                                            <li
                                                v-for="(city, index) in options.objLocation.locations"
                                                :key="index"
                                                @click.stop="setOptionValueFromList(city, 'objLocation'); options.objLocation.value = ''"
                                            >
                                                <div class="location-info">
                                                    <p class="name">{{city.name}}</p>
                                                    <p class="subject">{{city.subject}}</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </transition>
                            </div>
                        </div>
                        <div class="selected-locations">
                            <div
                                class="location mobile-computed-location"
                                v-if="!filter.objLocation.length"
                            >Все населенные пункты</div>
                            <div
                                class="location"
                                v-for="(location, index) in filter.objLocation"
                                :key="index"
                            >
                                {{location.name}}
                                <span @click="deleteLocation(index)">
                                    <img
                                        src="../assets/img/delete-white.png"
                                        alt="Delete location icon"
                                        width="8"
                                        height="8"
                                    >
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="type-header">
                        <h5>Укажите стоимость в рублях</h5>
                    </div>
                    <div class="mobile-price-wrapper">
                        <div class="key-inputs">
                            <input
                                type="number"
                                name="Min price"
                                id="minPrice"
                                required
                                pattern="[0-9]"
                                :placeholder="filter.objPrice.min"
                                v-model="options.objPrice.min"
                            >
                            <input
                                type="number"
                                name="Max price"
                                id="maxPrice"
                                required
                                pattern="[0-9]"
                                :placeholder="filter.objPrice.max"
                                v-model="options.objPrice.max"
                            >
                        </div>
                        <div class="options-controls">
                            <button
                                class="submit"
                                @click="setRange('objPrice', 'Стоимость', 'млн.', 0, 100000000)"
                            >Подтвердить</button>
                            <button
                                class="reset"
                                @click="resetRange('objPrice', 'Стоимость', 0, 100000000)"
                            >Сбросить</button>
                        </div>
                    </div>
                    <div class="mobile-extra-options-wrapper" v-if="showExtra">
                        <div class="type-header">
                            <h5>Выберите интересующую площадь</h5>
                        </div>
                        <div class="mobile-square-wrapper">
                            <div class="key-inputs">
                                <input
                                    type="number"
                                    name="Min square"
                                    id="minSquare"
                                    required
                                    pattern="[0-9]"
                                    :placeholder="filter.objSquare.min"
                                    v-model="options.objSquare.min"
                                >
                                <input
                                    type="number"
                                    name="Max square"
                                    id="maxSquare"
                                    required
                                    pattern="[0-9]"
                                    :placeholder="filter.objSquare.max"
                                    v-model="options.objSquare.max"
                                >
                            </div>
                            <div class="options-controls">
                                <button
                                    class="submit"
                                    @click="setRange('objSquare', 'Площадь', 'кв. м.', 10, 1000)"
                                >Подтвердить</button>
                                <button
                                    class="reset"
                                    @click="resetRange('objSquare', 'Площадь', 10, 1000)"
                                >Сбросить</button>
                            </div>
                        </div>
                        <div
                            class="type-header"
                            v-if="filter.objType != 'Коммерческая недвижимость'"
                        >
                            <h5>Укажите предпочтительный этаж</h5>
                        </div>
                        <div
                            class="mobile-floor-wrapper"
                            v-if="filter.objType != 'Коммерческая недвижимость'"
                        >
                            <div class="key-inputs">
                                <input
                                    type="number"
                                    name="Min floor"
                                    id="minFloor"
                                    required
                                    pattern="[0-9]"
                                    :placeholder="filter.objFloor.min"
                                    v-model="options.objFloor.min"
                                >
                                <input
                                    type="number"
                                    name="Max floor"
                                    id="maxFloor"
                                    required
                                    pattern="[0-9]"
                                    :placeholder="filter.objFloor.max"
                                    v-model="options.objFloor.max"
                                >
                            </div>
                            <div class="options-controls">
                                <button
                                    class="submit"
                                    @click="setRange('objFloor', 'Этаж', '', 1, 30)"
                                >Подтвердить</button>
                                <button
                                    class="reset"
                                    @click="resetRange('objFloor', 'Этаж', 1, 30)"
                                >Сбросить</button>
                            </div>
                        </div>
                        <div
                            class="type-header"
                            v-if="filter.objType != 'Коммерческая недвижимость'"
                        >
                            <h5>Укажите количество комнат</h5>
                        </div>
                        <div
                            class="mobile-rooms-wrapper"
                            v-if="filter.objType != 'Коммерческая недвижимость'"
                        >
                            <div class="rooms-list">
                                <div
                                    class="rooms"
                                    v-for="(element, index) in options.objRoom.list"
                                    :key="index"
                                >
                                    <label>
                                        <input
                                            type="checkbox"
                                            :id="element.rooms"
                                            :value="element.rooms"
                                            v-model="options.objRoom.selected"
                                        >
                                        {{element.name}}
                                    </label>
                                </div>
                            </div>
                            <div class="options-controls room-controls">
                                <button class="submit" @click="setFloorFilter">Подтвердить</button>
                                <button class="reset" @click="resetFloorFilter">Сбросить</button>
                            </div>
                        </div>
                        <div
                            class="type-header"
                            v-if="filter.objType != 'Коммерческая недвижимость'"
                        >
                            <h5>Дополнительные параметры</h5>
                        </div>
                        <div
                            class="mobile-extra-options-section"
                            v-if="filter.objType != 'Коммерческая недвижимость'"
                        >
                            <div
                                class="flats-and-aparts-container"
                                v-if="filter.objType == 'Квартиры' || filter.objType == 'Апартаменты'"
                            >
                                <div class="type-building">
                                    <span
                                        @click="buildingType('Все')"
                                        :class="{active : filter.objExtra.typeBuilds.allBuilds}"
                                    >Все</span>
                                    <span
                                        @click="buildingType('Новостройки')"
                                        :class="{active : filter.objExtra.typeBuilds.newBuilds}"
                                    >Новостройки</span>
                                    <span
                                        @click="buildingType('Вторичный рынок')"
                                        :class="{active : filter.objExtra.typeBuilds.usedBuilds}"
                                    >Вторичный рынок</span>
                                </div>
                            </div>
                            <div class="mobile-age-build-wrapper">
                                <div
                                    class="mobile-age-data"
                                    v-if="filter.objExtra.typeBuilds.usedBuilds || filter.objExtra.typeBuilds.allBuilds"
                                >
                                    <div class="mobile-age-build-header">Возраст дома</div>
                                    <div class="mobile-input-block">
                                        <button @click="options.objExtra.ageBuild++">
                                            <img
                                                src="../assets/img/plus.png"
                                                alt="Plus button"
                                                width="12"
                                                height="12"
                                            >
                                        </button>
                                        <span class="label">{{ageBuildComputed}}</span>
                                        <button @click="options.objExtra.ageBuild--">
                                            <img
                                                src="../assets/img/minus.png"
                                                alt="Minus button"
                                                width="12"
                                                height="12"
                                            >
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="type-header"
                            v-if="filter.objType == 'Квартиры' || filter.objType == 'Апартаменты'"
                        >
                            <h5>Категория дома</h5>
                        </div>
                        <div
                            class="mobile-flats-and-aparts-category"
                            v-if="filter.objType == 'Квартиры' || filter.objType == 'Апартаменты'"
                        >
                            <div class="mobile-categories-list">
                                <div
                                    class="category"
                                    v-for="(cat, index) in options.objExtra.buildCategory.categories"
                                    :key="index"
                                >
                                    <label>
                                        <input
                                            type="checkbox"
                                            :value="cat"
                                            v-model="options.objExtra.buildCategory.selectedCategories"
                                        >
                                        {{cat}}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div
                            class="type-header"
                            v-if="filter.objType == 'Загородные дома' || filter.objType == 'Дачные дома'"
                        >
                            <h5>Категория дома</h5>
                        </div>
                        <div
                            class="mobile-houses-category"
                            v-if="filter.objType == 'Загородные дома' || filter.objType == 'Дачные дома'"
                        >
                            <div class="mobile-categories-list">
                                <div
                                    class="category"
                                    v-for="(cat, index) in options.objExtra.houseCategory.categories"
                                    :key="index"
                                >
                                    <label>
                                        <input
                                            type="checkbox"
                                            :value="cat"
                                            v-model="options.objExtra.houseCategory.selectedCategories"
                                        >
                                        {{cat}}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="mobile-yard-square-wrapper">
                            <div
                                class="mobile-yard-data"
                                v-if="filter.objExtra.typeBuilds.usedBuilds || filter.objExtra.typeBuilds.allBuilds"
                            >
                                <div class="mobile-age-build-header">Площадь участка</div>
                                <div class="mobile-input-block">
                                    <button @click="options.objExtra.houseSquare++">
                                        <img
                                            src="../assets/img/plus.png"
                                            alt="Plus button"
                                            width="12"
                                            height="12"
                                        >
                                    </button>
                                    <span class="label">{{houseSquareComputed}}</span>
                                    <button @click="options.objExtra.houseSquare--">
                                        <img
                                            src="../assets/img/minus.png"
                                            alt="Minus button"
                                            width="12"
                                            height="12"
                                        >
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="type-header">
                            <h5>Состояние помещений</h5>
                        </div>
                        <div class="mobile-build-condition-wrapper">
                            <div class="mobile-categories-list">
                                <div
                                    class="category"
                                    v-for="(cat, index) in options.objExtra.buildCondition.conditions"
                                    :key="index"
                                >
                                    <label>
                                        <input
                                            type="checkbox"
                                            :value="cat"
                                            v-model="options.objExtra.buildCondition.selectedConditions"
                                        >
                                        {{cat}}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="options-controls extra-controls">
                            <button class="submit" @click="setExtra">Подтвердить</button>
                            <button class="reset" @click="setExtra">Сбросить</button>
                        </div>
                    </div>
                    <div class="mobile-extra-options-btn">
                        <button @click="showExtra = !showExtra" v-if="!showExtra">
                            <img
                                src="../assets/img/options.png"
                                alt="Extra options logo"
                                width="11"
                                height="11"
                            >
                            Показать фильтры
                        </button>
                        <button @click="showExtra = !showExtra" v-if="showExtra">
                            <img
                                src="../assets/img/delete.png"
                                alt="Extra options logo"
                                width="11"
                                height="11"
                            >
                            Скрыть фильтры
                        </button>
                    </div>
                    <div class="mobile-results">
                        <router-link v-if="filtredObjects.length" :to="{ name: 'Objects' }">
                            <button class="search-btn">{{foundObjects}}</button>
                        </router-link>
                        <button
                            class="search-btn disabled"
                            v-if="!filtredObjects.length"
                            disabled
                        >{{foundObjects}}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!--
    Filter component
-->

<script>
// import { Carousel, Slide } from "vue-carousel";
import Axios from "axios";
// import VueSlider from "vue-slider-component";
// import "vue-slider-component/lib/theme/material.scss";

export default {
    name: "obj-filter",
    data() {
        return {
            init: true,
            filterBtnText: "Поиск объектов",
            iconAnimate: false,
            showExtra: false,
            // filtredObjects: [],
            filter: {
                objType: "Квартиры",
                dealType: "Купить",
                objLocation: [], // Need save coordinates for unique
                objPrice: {
                    min: 0,
                    max: 100000000
                },
                objSquare: {
                    min: 0,
                    max: 1000
                },
                objFloor: {
                    min: 1,
                    max: 30
                },
                objRoom: {
                    selected: []
                },
                objExtra: {
                    typeBuilds: {
                        allBuilds: true,
                        newBuilds: false,
                        usedBuilds: false
                    },
                    yearWillComplite: new Date().getFullYear() + 5,
                    ageBuild: 50,
                    categories: [],
                    houseCategories: [],
                    conditions: [],
                    houseConditions: [],
                    houseSquare: 6
                }
            },
            options: {
                objType: {
                    showed: false,
                    viewport: "Квартиры",
                    content: {
                        options: [
                            "Квартиры",
                            "Апартаменты",
                            "Загородные дома",
                            "Дачные дома",
                            "Коммерческая недвижимость"
                        ]
                    }
                },
                dealType: {
                    showed: false,
                    viewport: "Купить",
                    content: {
                        options: [
                            "Купить",
                            "Арендовать",
                            "Арендовать посуточно"
                        ]
                    }
                },
                objLocation: {
                    showed: false,
                    viewport: "Населенный пункт",
                    value: "",
                    locations: []
                },
                objPrice: {
                    showed: false,
                    viewport: "Стоимость",
                    min: null,
                    max: null
                },
                objSquare: {
                    showed: false,
                    viewport: "Площадь",
                    min: null,
                    max: null
                },
                objFloor: {
                    showed: false,
                    viewport: "Этаж",
                    min: null,
                    max: null
                },
                objRoom: {
                    showed: false,
                    viewport: "Количество комнат",
                    list: [
                        { rooms: 0, name: "Студия" },
                        { rooms: 1, name: "1 комната" },
                        { rooms: 2, name: "2 комнаты" },
                        { rooms: 3, name: "3 комнаты" },
                        { rooms: 4, name: "4 комнаты" },
                        { rooms: 5, name: "5 комнат" },
                        { rooms: 6, name: "6 комнат" },
                        { rooms: 7, name: "7 и более комнат" },
                        { rooms: 1000, name: "Свободная лпанировка" }
                    ],
                    selected: []
                },
                objExtra: {
                    showed: false,
                    viewport: "Прочее",
                    yearWillComplite: new Date().getFullYear() + 5,
                    ageBuild: 50,
                    houseSquare: 6,
                    buildCategory: {
                        showed: false,
                        selectedCategories: [],
                        categories: [
                            "Кирпичный",
                            "Монолитный",
                            "Панельный",
                            "Кирпично-монолитный",
                            "Блочный"
                        ]
                    },
                    houseCategory: {
                        showed: false,
                        selectedCategories: [],
                        categories: [
                            "Кирпичный",
                            "Блочный",
                            "Брусовой",
                            "Каркасный"
                        ]
                    },
                    buildCondition: {
                        showed: false,
                        selectedConditions: [],
                        conditions: [
                            "Без ремонта",
                            "Социальный ремонт",
                            "Евро ремонт",
                            "Дизайнерский ремонт"
                        ]
                    },
                    houseCondition: {
                        showed: false,
                        selectedConditions: [],
                        conditions: [
                            "Без ремонта",
                            "Социальный ремонт",
                            "Евро ремонт",
                            "Дизайнерский ремонт"
                        ]
                    }
                }
            }
        };
    },
    props: {
        objects: Array
    },
    methods: {
        getObjects() {
            let filter = this.filter;
            let latCoord = filter.objLocation.map(loc => {
                return loc.coords.lat;
            });
            let rooms = filter.objRoom.selected.join("|");
            let locations = latCoord.join("|");

            let objNew = filter.objExtra.typeBuilds.allBuilds
                ? "true|false"
                : filter.objExtra.typeBuilds.newBuilds;
            let objUsed = filter.objExtra.typeBuilds.allBuilds
                ? "true|false"
                : filter.objExtra.typeBuilds.usedBuilds;
            let yearWillComplite = objNew
                ? filter.objExtra.yearWillComplite
                : 2100;
            let ageBuild = objUsed ? filter.objExtra.ageBuild : 1000;
            let buildCategory = filter.objExtra.categories.join("|");
            let condition = filter.objExtra.conditions.join("|");
            let houseSquare = filter.objExtra.houseSquare;

            let url = `http://localhost:3000/objects?objType=${
                filter.objType
            }&dealType=${
                filter.dealType
            }&objLocation_like=${locations}&objPrice_gte=${
                filter.objPrice.min
            }&objPrice_lte=${filter.objPrice.max}&objSquare_gte=${
                filter.objSquare.min
            }&objSquare_lte=${filter.objSquare.max}&objFloor_gte=${
                filter.objFloor.min
            }&objFloor_lte=${filter.objFloor.max}
            &objRoom_like=${rooms}&new_like=${objNew}&used_like=${objUsed}&yearWillComplite_gte=1900&yearWillComplite_lte=${
                filter.objExtra.yearWillComplite
            }&ageBuild_gte=1&ageBuild_lte=${
                filter.objExtra.ageBuild
            }&categories_like=${buildCategory}&condition_like=${condition}`;

            // console.log(url);

            // Get request to fake db
            Axios.get(url, {
                onDownloadProgress: function(progressEvent) {
                    // Progress event
                    this.filterBtnText = "Выполняю поиск";
                }
            })
                .then(response => {
                    this.filterBtnText = `Показать объекты (${
                        response.data.length
                    })`;
                    this.$store.commit("changeFiltredObjects", response.data);
                    // this.filtredObjects = response.data;
                    // console.log(this.filtredObjects);
                })
                .catch(error => {
                    this.$store.commit("changeLoadStatus", true);
                    console.error(`Get objects from filter fail`);
                });
        },
        managePopup(target) {
            let obj = this.options[target];

            for (const key in this.options) {
                let option = this.options[key];
                if (option.showed && key != target) option.showed = false;
            }
            obj.showed = !obj.showed;
        },
        setOptionValueFromList(option, target) {
            let obj = this.options[target];
            obj.showed = false;
            if (target == "objLocation") {
                for (const location of this.filter[target]) {
                    if (location.coords.lat == option.coords.lat) return;
                }
                this.filter[target].push(option);
            } else {
                this.filter[target] = option;
                obj.viewport = option;
            }
            this.getObjects();
        },
        clearInput(target) {
            this.options[target].value = "";
        },
        closePopups() {
            for (const key in this.options) {
                let option = this.options[key];
                if (option.showed) option.showed = false;
                if (key == "objLocation" && !this.filter.objLocation)
                    option.value = "";
            }
        },
        setRange(target, title, unit, min, max) {
            let option = this.options[target];
            let filter = this.filter[target];
            filter.min = option.min ? parseInt(option.min) : min;
            filter.max = option.max ? parseInt(option.max) : max;
            option.min = option.max = null;
            if (filter.min > filter.max) filter.min = 0;
            if (!filter.min && filter.max) {
                if (target == "objPrice") {
                    option.viewport = `${title} до ${Number(
                        (filter.max / 1000000).toFixed(1)
                    )} ${unit}`;
                } else {
                    option.viewport = `${title} до ${filter.max} ${unit}`;
                }
            } else {
                if (target == "objPrice") {
                    option.viewport = `${title} от ${Number(
                        (filter.min / 1000000).toFixed(1)
                    )} до ${Number((filter.max / 1000000).toFixed(1))} ${unit}`;
                } else {
                    option.viewport = `${title} от ${filter.min} до ${
                        filter.max
                    } ${unit}`;
                }
            }
            option.showed = false;
            this.getObjects();
        },
        resetRange(target, viewport, min, max) {
            let option = this.options[target];
            let filter = this.filter[target];
            option.min = min;
            option.max = max;
            filter.min = min;
            filter.max = max;
            option.viewport = viewport;
            this.getObjects();
        },
        setFloorFilter() {
            let obj = this.options.objRoom;
            this.filter.objRoom.selected = obj.selected;
            // obj.selected = [];
            obj.viewport = this.filter.objRoom.selected.length
                ? `Кол-во комнат (отмечено - ${
                      this.filter.objRoom.selected.length
                  })`
                : `Количество комнат`;
            obj.showed = false;
            this.getObjects();
        },
        resetFloorFilter() {
            this.options.objRoom.viewport = "Количество комнат";
            this.options.objRoom.selected = this.filter.objRoom.selected = [];
            this.getObjects();
        },
        setExtra() {
            let options = this.options.objExtra;
            let filter = this.filter.objExtra;
            filter.categories = options.buildCategory.selectedCategories;
            filter.houseCategories = options.houseCategory.selectedCategories;
            filter.conditions = options.buildCondition.selectedConditions;
            filter.houseConditions = options.houseCondition.selectedConditions;
            options.showed = false;
            this.getObjects();
        },
        resetExtra() {
            let options = this.options.objExtra;
            let filter = this.filter.objExtra;
            filter.typeBuilds = options.typeBuilds = {
                allBuilds: true,
                newBuilds: false,
                usedBuilds: false
            };
            filter.yearWillComplite = options.yearWillComplite = new Date().getFullYear();
            filter.ageBuild = options.ageBuild = 25;
            filter.categories = options.buildCategory.selectedCategories = [];
            filter.houseCategories = options.houseCategory.selectedCategories = [];
            filter.conditions = options.buildCondition.selectedConditions = [];
            filter.houseConditions = options.houseCondition.selectedConditions = [];
            filter.houseSquare = options.houseSquare = 6;
            this.getObjects();
        },
        deleteLocation(index) {
            this.filter.objLocation.splice(index, 1);
            this.getObjects();
        },
        buildingType(value) {
            let obj = {};
            switch (value) {
                case "Вторичный рынок":
                    obj = {
                        allBuilds: false,
                        newBuilds: false,
                        usedBuilds: true
                    };
                    break;
                case "Новостройки":
                    obj = {
                        allBuilds: false,
                        newBuilds: true,
                        usedBuilds: false
                    };
                    break;
                case "Все":
                    obj = {
                        allBuilds: true,
                        newBuilds: false,
                        usedBuilds: false
                    };
                    break;
            }
            this.filter.objExtra.typeBuilds = obj;
            this.getObjects();
        },
        shakeIcon() {
            // console.log(this.filter.objRoom.selected);
        }
    },
    computed: {
        filtredObjects: function() {
            return this.$store.state.filtredObjects;
        },
        ageBuildComputed: function() {
            let year =
                this.options.objExtra.ageBuild >= 1
                    ? this.options.objExtra.ageBuild
                    : 1;
            this.filter.objExtra.ageBuild = this.options.objExtra.ageBuild = year;
            return year;
        },
        houseSquareComputed: function() {
            let square =
                this.options.objExtra.houseSquare >= 6
                    ? this.options.objExtra.houseSquare
                    : 6;
            this.filter.objExtra.houseSquare = this.options.objExtra.houseSquare = square;
            return square;
        },
        yearWillCompliteComputed: function() {
            let currentYear = new Date().getFullYear();
            let year =
                this.options.objExtra.yearWillComplite >= currentYear
                    ? this.options.objExtra.yearWillComplite
                    : currentYear;
            this.filter.objExtra.yearWillComplite = this.options.objExtra.yearWillComplite = year;
            return year;
        },
        foundLocations: function() {
            // Get location from server
            let value = this.options.objLocation.value;
            if (value.length > 1) {
                Axios.get(`http://localhost:3000/locations?name_like=${value}`)
                    .then(response => {
                        this.options.objLocation.showed = response.data.length
                            ? true
                            : false;

                        this.options.objLocation.locations = response.data.slice(
                            0,
                            7
                        );
                        return this.options.objLocation.locations;
                    })
                    .catch(error => {
                        this.$store.commit("changeLoadStatus", true);
                        console.error(
                            `Get locations from input in filter fail`
                        );
                        this.options.objLocation.locations = [
                            {
                                name: "Невозможно отобразить",
                                subject: error
                            }
                        ];
                        return this.options.objLocation.locations;
                    });
            }
            this.options.objLocation.showed = false;
            return null;
        },
        foundObjects: function() {
            if (this.$props.objects.length && this.init) {
                this.init = false;
                this.filterBtnText = `Показать объекты (${
                    this.$props.objects.length
                })`;
                this.$store.commit("changeFiltredObjects", this.$props.objects);
                // this.filtredObjects = this.$props.objects;
                return this.filterBtnText;
            }
            this.getObjects();
            return this.filterBtnText;
        }
    }
    // components: {
    //     VueSlider
    // }
};
</script>

<!--
    Filter style
-->

<style lang="scss" scoped>
.obj-filter {
    font-family: sans-serif;
    .container {
        position: relative;
        max-width: 1200px;
        margin: auto;
        .filter-wrapper {
            padding: 0 30px;
            .mobile-filter {
                background-color: white;
                h3 {
                    padding: 10px 0;
                    margin: 0;
                }
                .type-header {
                    text-align: left;
                    padding: 15px 10px;
                }
                .obj-types-wrapper,
                .deal-type-wrapper {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: start;
                    padding: 0 5px;

                    .obj-type-mobile,
                    .deal-type-mobile {
                        padding: 10px;
                        text-transform: uppercase;
                        font-size: 12px;
                        margin: 0 5px 10px;
                        &:hover {
                            cursor: pointer;
                        }
                    }
                    .obj-type-mobile.selected,
                    .deal-type-mobile.selected {
                        background-color: #bfbfbf;
                    }
                }
                .location-wrapper {
                    .location-mobile {
                        padding: 0 10px;
                        .location-input {
                            border: 1px solid #c2c2c2;
                            display: flex;
                            justify-content: space-between;
                            position: relative;
                            width: 400px;
                            input {
                                font-size: 13px;
                                border: none;
                                width: 75%;
                                padding: 10px;
                                box-shadow: none;
                                &:hover,
                                &:focus {
                                    outline: none;
                                }
                            }
                            img {
                                padding: 10px;
                            }
                            .mobile-locations-list {
                                left: -1px;
                                right: -1px;
                                border: 1px solid #8080807a;
                                margin-top: 50px;
                                padding: 10px;
                                z-index: 2;
                                position: absolute;
                                background-color: white;
                                ul {
                                    margin: -10px;
                                    font-size: 13px;
                                    text-align: left;
                                }
                                li {
                                    margin: 0;
                                    padding: 10px 0;
                                    width: 100%;
                                    &:hover {
                                        background-color: #736c6c2e;
                                        cursor: pointer;
                                    }
                                    span {
                                        padding-left: 10px;
                                    }
                                }
                                li.selected {
                                    cursor: default;
                                    background-color: #736c6c2e;
                                }
                                p {
                                    margin: 0;
                                }
                                .location-info {
                                    padding-left: 10px;
                                }
                                .subject {
                                    font-size: 10px;
                                }
                            }
                        }
                    }
                    .selected-locations {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: start;
                        height: 20px;
                        width: 100%;
                        height: 100%;
                        padding: 10px 10px 0;
                        .location {
                            font-size: 12px;
                            padding: 3px 5px;
                            margin-right: 5px;
                            margin-top: 5px;
                            background-color: #4cc251;
                            color: white;
                            span {
                                padding-left: 5px;
                                &:hover {
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                }
                .mobile-price-wrapper {
                    padding-left: 10px;
                    .key-inputs {
                        display: flex;
                        width: 400px;
                        input {
                            font-size: 13px;
                            border: none;
                            width: 75%;
                            padding: 10px;
                            box-shadow: none;
                            &:hover,
                            &:focus {
                                outline: none;
                            }
                        }
                        input:nth-child(1) {
                            border-right: 1px solid #c2c2c2;
                        }
                    }
                    .options-controls {
                        display: flex;
                        .submit {
                            padding: 5px 10px;
                            margin: 10px 0 0 0;
                            font-size: 12px;
                            background-color: #2dea3da8;
                            border: none;
                            &:hover {
                                background-color: #94f19ca8;
                                cursor: pointer;
                            }
                            &:focus {
                                outline: none;
                            }
                        }
                        .reset {
                            padding: 5px 10px;
                            font-size: 12px;
                            margin: 10px 0 0 10px;
                            background-color: #d4d4c6a3;
                            border: none;
                            &:hover {
                                background-color: #cacac5a3;
                                cursor: pointer;
                            }
                            &:focus {
                                outline: none;
                            }
                        }
                    }
                }
                .mobile-extra-options-wrapper {
                    .extra-controls {
                        padding-left: 10px;
                    }
                    .mobile-square-wrapper,
                    .mobile-floor-wrapper {
                        padding-left: 10px;
                    }
                    .mobile-rooms-wrapper {
                        padding-left: 10px;
                        .rooms-list {
                            display: flex;
                            flex-wrap: wrap;
                            .rooms {
                                margin: 0 10px 5px 0;
                            }
                        }
                    }
                    .mobile-extra-options-section {
                        padding-left: 10px;
                        .flats-and-aparts-container {
                            .type-building {
                                display: flex;
                                flex-wrap: wrap;
                                span {
                                    padding: 10px 20px;
                                    font-size: 13px;
                                    text-transform: uppercase;
                                    &:hover {
                                        cursor: pointer;
                                    }
                                }
                                .active {
                                    background-color: #bfbfbf;
                                }
                            }
                        }
                    }
                    .key-inputs {
                        display: flex;
                        width: 400px;
                        input {
                            font-size: 13px;
                            border: none;
                            width: 75%;
                            padding: 10px;
                            box-shadow: none;
                            &:hover,
                            &:focus {
                                outline: none;
                            }
                        }
                        input:nth-child(1) {
                            border-right: 1px solid #c2c2c2;
                        }
                    }
                    .options-controls {
                        display: flex;
                        .submit {
                            padding: 5px 10px;
                            margin: 10px 0 0 0;
                            font-size: 12px;
                            background-color: #2dea3da8;
                            border: none;
                            &:hover {
                                background-color: #94f19ca8;
                                cursor: pointer;
                            }
                            &:focus {
                                outline: none;
                            }
                        }
                        .reset {
                            padding: 5px 10px;
                            font-size: 12px;
                            margin: 10px 0 0 10px;
                            background-color: #d4d4c6a3;
                            border: none;
                            &:hover {
                                background-color: #cacac5a3;
                                cursor: pointer;
                            }
                            &:focus {
                                outline: none;
                            }
                        }
                    }
                }
                .mobile-extra-options-btn {
                    padding: 20px 0;
                    button {
                        padding: 15px;
                        font-size: 13px;
                        text-transform: uppercase;
                        background-color: #e4e4db;
                        outline: none;
                        box-shadow: none;
                        border: none;
                    }
                }
                .mobile-age-build-wrapper,
                .mobile-yard-square-wrapper {
                    .mobile-age-data,
                    .mobile-yard-data {
                        margin-top: 10px;
                        display: flex;
                        flex-wrap: nowrap;
                        .mobile-age-build-header {
                            padding-right: 20px;
                        }
                        .mobile-input-block {
                            .label {
                                padding: 0 15px;
                            }
                            button {
                                border: none;
                                box-shadow: none;
                                outline: none;
                                &:hover {
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                    .mobile-yard-data {
                        padding-left: 10px;
                    }
                }
                .mobile-flats-and-aparts-category,
                .mobile-houses-category,
                .mobile-build-condition-wrapper {
                    padding-left: 10px;
                    .mobile-categories-list {
                        display: flex;
                        flex-wrap: wrap;
                        .category {
                            margin: 0 10px 5px 0;
                        }
                    }
                }
                .mobile-results {
                    text-align: right;
                    .search-btn {
                        width: 100%;
                        height: 100%;
                        background-color: #4cc150e8;
                        border: none;
                        padding: 15px;
                        color: white;
                        text-transform: uppercase;
                        font-size: 15px;
                        font-weight: 500;
                        &:hover {
                            cursor: pointer;
                        }
                    }
                    .disabled {
                        background-color: grey;
                        &:hover {
                            cursor: default !important;
                        }
                    }
                }
            }
            .filter {
                background-color: white;
                h3 {
                    padding: 15px;
                    margin: 0;
                }
                .selectors-wrapper {
                    padding: 5px 15px 15px;
                    display: flex;
                    justify-content: space-evenly;
                    flex-wrap: wrap;
                    z-index: 1;
                    .selector-wrapper {
                        width: 22%;
                        position: relative;
                    }
                }
                .selector {
                    width: 100%;
                    display: flex;
                    border: 1px solid #8080807a;
                    justify-content: space-between;
                    &:hover {
                        cursor: pointer;
                    }
                    .selector-title {
                        font-size: 13px;
                        padding: 10px;
                    }
                    img {
                        transform: rotate(0deg);
                        transition: 0.6s ease;
                        padding: 10px;
                    }
                    .rotate {
                        transform: rotate(90deg);
                        transition: 0.6s ease;
                    }
                    #locationInput {
                        font-size: 13px;
                        border: none;
                        width: 75%;
                        padding-left: 10px;
                        box-shadow: none;
                        &:hover,
                        &:focus {
                            outline: none;
                        }
                    }
                }
                .selector.disabled {
                    cursor: not-allowed;
                    color: #a8b1ae;
                    img {
                        opacity: 0.4;
                    }
                }
                .locations {
                    width: 91.7%;
                }
                .options {
                    right: -2px;
                    left: 0;
                    border: 1px solid #8080807a;
                    margin-top: 15px;
                    padding: 10px;
                    z-index: 2;
                    position: absolute;
                    background-color: white;
                    ul {
                        margin: -10px;
                        font-size: 13px;
                        text-align: left;
                    }
                    li {
                        margin: 0;
                        padding: 10px 0;
                        width: 100%;
                        &:hover {
                            background-color: #736c6c2e;
                            cursor: pointer;
                        }
                        span {
                            padding-left: 10px;
                        }
                    }
                    li.selected {
                        cursor: default;
                        background-color: #736c6c2e;
                    }
                    .key-inputs {
                        display: flex;
                        input {
                            width: 50%;
                            font-size: 13px;
                            padding: 5px;
                            &:hover,
                            &:focus {
                                outline: none;
                            }
                        }
                    }
                    .options-controls {
                        display: flex;
                        .submit {
                            padding: 5px 10px;
                            margin: 10px 0 0 0;
                            font-size: 12px;
                            background-color: #2dea3da8;
                            border: none;
                            &:hover {
                                background-color: #94f19ca8;
                                cursor: pointer;
                            }
                            &:focus {
                                outline: none;
                            }
                        }
                        .reset {
                            padding: 5px 10px;
                            font-size: 12px;
                            margin: 10px 0 0 10px;
                            background-color: #d4d4c6a3;
                            border: none;
                            &:hover {
                                background-color: #cacac5a3;
                                cursor: pointer;
                            }
                            &:focus {
                                outline: none;
                            }
                        }
                    }
                    .room-controls {
                        margin-top: 10px;
                    }
                }
                .location-info {
                    padding: 0 10px;
                    .subject {
                        font-size: 10px;
                    }
                    p {
                        margin: 0;
                    }
                }
                .room {
                    .room-li {
                        padding: 0;
                    }
                    .rooms {
                        label {
                            display: block;
                            width: 100%;
                            padding: 10px;
                        }
                    }
                }
            }
        }
    }
    .extra-options {
        padding-bottom: 15px;
        button {
            border: none;
            font-size: 13px;
            background-color: white;
            &:hover {
                cursor: pointer;
                outline: none;
            }
            &:focus {
                outline: none;
            }
            img {
                padding-right: 5px;
            }
        }
        .wrapper {
            padding: 5px 15px 15px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            z-index: 1;
            .square,
            .floor,
            .room,
            .extra {
                position: relative;
                width: 22%;
            }
        }
    }
    .footer {
        display: flex;
        justify-content: space-between;
        background-color: #dfdcdc;
        .selected-locations {
            display: flex;
            flex-wrap: wrap;
            justify-content: start;
            height: 20px;
            width: 100%;
            height: 100%;
            .location {
                font-size: 12px;
                padding: 3px 5px;
                margin-right: 5px;
                margin-top: 5px;
                background-color: #4cc251;
                color: white;
                span {
                    padding-left: 5px;
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }
        .results {
            text-align: right;
            .search-btn {
                width: 300px;
                height: 100%;
                background-color: #4cc150e8;
                border: none;
                padding: 15px;
                color: white;
                text-transform: uppercase;
                font-size: 15px;
                font-weight: 500;
                &:hover {
                    cursor: pointer;
                }
            }
            .disabled {
                background-color: grey;
                &:hover {
                    cursor: default !important;
                }
            }
        }
    }
}

.groups-list {
    font-size: 13px;
    text-transform: none;
    .type-building {
        font-size: 10px;
        text-transform: uppercase;
        padding: 5px 0;
        span {
            padding: 4px;
            &:hover {
                cursor: pointer;
            }
        }
        span.active {
            background-color: #73717157;
            &:hover {
                cursor: default;
            }
        }
    }
    .build-date,
    .square {
        padding-top: 10px;
        width: 100% !important;
        .age-data,
        .square-data {
            display: flex;
            span {
                width: 50%;
            }
            .input-block {
                width: 50%;
                display: flex;
                justify-content: space-between;
                span {
                    text-align: center;
                }
            }
            text-align: left;
        }
    }
    .build-category,
    .build-condition {
        padding-top: 10px;
        .title {
            display: flex;
            justify-content: space-between;
            &:hover {
                cursor: pointer;
            }
            img {
                transform: rotate(0deg);
                transition: 0.6s ease;
            }
            .rotate {
                transform: rotate(90deg);
                transition: 0.6s ease;
            }
        }
        .categories-list {
            ul {
                margin-top: 10px !important;
                padding-bottom: 10px;
                li {
                    &:hover {
                        cursor: default !important;
                    }
                    padding: 5px 0 !important;
                    .category {
                        margin-left: 10px;
                    }
                }
            }
        }
    }
}

// Vue animations

.showList-enter-active,
.showList-leave-active {
    transition: opacity 0.4s;
}
.showList-enter,
.showList-leave-to {
    transition: opacity 0.4s;
    opacity: 0;
}

// Common

::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #2c3e50;
    font-size: 13px;
}
::-moz-placeholder {
    /* Firefox 19+ */
    color: #2c3e50;
    font-size: 13px;
}
:-ms-input-placeholder {
    /* IE 10+ */
    color: #2c3e50;
    font-size: 13px;
}
:-moz-placeholder {
    /* Firefox 18- */
    color: #2c3e50;
    font-size: 13px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}

// Media queries

@media screen and (max-width: 1100px) {
    .filter {
        display: none;
    }
}

@media screen and (min-width: 1101px) {
    .mobile-filter {
        display: none;
    }
}

@media screen and (max-width: 500px) {
    .obj-filter {
        padding-top: 165px !important;
        .filter-wrapper {
            padding: 0 !important;
        }
    }
}

@media screen and (max-width: 500px) {
    .key-inputs {
        flex-direction: column;
        input {
            width: 90% !important;
        }
        input:nth-child(1) {
            border-right: none !important;
        }
    }
}

@media screen and (max-width: 700px) {
    .location-mobile {
        .location-input {
            width: 100% !important;
        }
    }
    .mobile-price-wrapper {
        padding-right: 10px;
    }
    .key-inputs {
        width: 100% !important;
    }
}

@media screen and (min-width: 600px) and (max-width: 700px) {
    .obj-filter {
        padding-top: 10px !important;
    }
}

@media screen and (min-width: 500px) and (max-width: 600px) {
    .obj-filter {
        padding-top: 20px !important;
    }
}

@media screen and (min-width: 450px) and (max-width: 500px) {
    .obj-filter {
        padding-top: 85px !important;
    }
}

@media screen and (min-width: 400px) and (max-width: 450px) {
    .obj-filter {
        padding-top: 100px !important;
    }
}
</style>
