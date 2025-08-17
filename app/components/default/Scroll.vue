<template>
    <div class="scrollDown"><b>DESLIZÁ</b><span></span></div>
</template>

<style scoped>
.scrollDown {
    display: none;
}

.scrollDown {
    width: 1px;
    height: 5.625rem;
    position: absolute;
    right: 3.75rem;
    bottom: 2rem;
    z-index: 2;
}

.scrollDown b {
    width: 6.25rem;
    font-size: 1.125rem;
    font-weight: 600;
    color: #fff;
    float: left;
    transform-origin: left;
    transform: rotate(90deg);
    margin-top: -2px;
    margin-left: -15px;
}

.scrollDown span {
    display: block;
    position: relative;
    padding-top: 5rem;
    text-align: center;
}

.scrollDown span::before {
    animation: elasticus 1.5s cubic-bezier(1, 0, 0, 1) infinite;
}

.scrollDown span::before {
    position: absolute;
    top: 0px;
    left: 50%;
    margin-left: -0.5px;
    width: 1px;
    height: 5.625rem;
    background: #fff;
    content: "";
}

@keyframes elasticus {
    0% {
        transform-origin: 0% 0%;
        transform: scale(1, 0);
    }

    50% {
        transform-origin: 0% 0%;
        transform: scale(1, 1);
    }

    50.1% {
        transform-origin: 0% 100%;
        transform: scale(1, 1);
    }

    100% {
        transform-origin: 0% 100%;
        transform: scale(1, 0);
    }
}

@media (width >=992px) {
    .scrollDown {
        display: block;
    }
}

@media (width >=1440px) {
    .scrollDown {
        right: 5.625rem;
        bottom: 3rem;
    }
}

@media (width >=2100px) {
    .scrollDown {
        right: 0;
    }
}
</style>