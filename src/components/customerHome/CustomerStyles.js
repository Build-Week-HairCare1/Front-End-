import { createGlobalStyle } from "styled-components";

export const CustomerStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Dancing+Script|Russo+One&display=swap");

html {
    font-size: 62.5%;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

header {
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    .logo{
        font-size: 1.8rem;
        font-family: 'Russo One', sans-serif;
    }

    .main-nav {
        width: 30%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 10px 0;

        a {
            font-size: 1.5rem;
            text-decoration: none;
            font-family: 'Russo One', sans-serif;
            color: rgb(108, 65, 72);

            &:hover {
                text-decoration: underline;
            }
        }

    }
}


.customer-home {
    border: 2px solid black;
    height: 92vh;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

//profile container

.profile-container {
    border: 2px solid black;
    width: 15%;
    height: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    margin-top: 50px;
    

    button {
        align-self: flex-end;
    }

    figure {
        height: 60%;
        width: 90%;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center center;
            border-radius: 10px;
        }
    }

    .info {
        width: 90%;
        text-align: center;

        .name {
            font-size: 1.7rem;
            padding-bottom: 10px;
            border-bottom: 0.5px dotted black;
        }

        .location {
            font-size: 1.5rem;
        }
    }

}

//dashboard

.dashboard-container {
    width: 80%;
    height: 100%;

    .dashboard-header {
        height: 40px;
        width: 50%;
        margin: 0 auto;

        .dashboard-links {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            a {
                font-size: 1.6rem;
                text-decoration: none;
                font-family: 'Russo One', sans-serif;
                color: rgb(108, 65, 72);

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}

// dashboard content

.dashboard-content {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    height: calc(100% - 40px);

    .no-reviews {
        align-self: center;
        font-size: 2rem;
    }

    .review-card {
        border: 2px solid black;
        height: 42%;
        width: 18%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        margin: 0 20px;
    }

    .card-info {
        figure {
            width: 100%;
            height: 70%;

            img {
                height: 100%;
                width: 100%;
                object-position: center center;
                object-fit: cover;
            }
        }

        .info-container {
            margin: 10px auto;
            width: 90%;
            height: 40%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;

        }
    }



}

// search content
.search-content {
    border: 2px solid black;
    height: calc(100% - 40px);
    position: relative;

    .search-form {
        border: 2px solid black;
        width: 300px;
        height: 100px;
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
    }
}

`;
