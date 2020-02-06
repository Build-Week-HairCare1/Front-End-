import { createGlobalStyle } from "styled-components";
import bg from "../../hairsalon.jpg";

export const CustomerStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: url(${bg}) no-repeat center;
    background-size: cover;
}

header {
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    .logo {
        width: 10%;
        font-size: 4rem;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
    }

    .main-nav {
        width: 20%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 10px 0;
        font-family: 'Roboto', sans-serif;
        

        a {
            font-size: 2.3rem;
            text-decoration: none;
            color: black;
            font-weight: 700;

            &:hover {
                text-decoration: underline;
            }
        }

        .special {
            color: rgb(182, 45, 97);
        }

    }
}


.customer-home {
    height: 92vh;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

//profile container

.profile-container {
    border: 1px solid black;
    border-radius: 10px;
    width: 15%;
    height: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    margin-top: 50px;
    background: rgba(0, 0, 0, 0.6);
    

    figure {
        height: 70%;
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
        color: white;

        .name {
            font-size: 1.7rem;
            padding-bottom: 10px;
            border-bottom: 0.5px dotted black;
        }

        .location {
            padding-top: 10px;
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
        width: 30%;
        margin: 0 auto;

        .dashboard-links {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            a {
                font-size: 1.7rem;
                text-decoration: none;
                color: black;
                font-weight: 700;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}

// dashboard content

.dashboard-content {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.6);
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
        border-radius: 10px;
        height: 42%;
        width: 18%;
        margin: 0 20px;
    }

    .card-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        height: 100%;

        figure {
            width: 100%;
            height: 80%;
            border-radius: 10px ;


            img {
                height: 100%;
                width: 100%;
                object-position: center center;
                object-fit: cover;
                border-radius: 10px ;
            }
        }

        .info-container {
            width: 90%;
            height: 20%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            a {
                color: white;
            }

            p {
                color: white;
            }

        }
    }



}

// search content
.search-content {
    height: calc(100% - 40px);
    position: relative;
    margin-top: 10px;
    border-radius: 10px;

    .map {
        border-radius: 10px;
    }

    .search-form {
        width: 250px;
        height: 100px;
        position: absolute;
        top: 10px;
        left: 10px;  
        z-index: 10;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .search-input {
            width: 70%;
            padding: 15px 10px;
            height: 20px;
            border-radius: 10px;
            font-size: 1.2rem;
            background: white;
            border: 0.5px solid black;
        }

        .search-btn {
            padding: 5px;
            width: 25%;
            border-radius: 5px;
            text-align: center;
            font-size: 1.2rem;
        }
    }

    .icon-container {
        background: white;
        width: 30px;
        height: 30px;
        border-radius: 30px;
        border: none;
        cursor: pointer;
        padding: 5px;

        .icon{
            width: 100%;
            height: 100%;
            object-position: center center;
            object-fit: cover;
        }
    }
}


//popup card


.popup-container{
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    .popup-image{
        width: 100%;
        height: 50%;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    .info {
        width: 90%;
        height: 25%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        margin: 20px 0;

        .popup-title{
            font-size: 1.5rem;
        }

        .popup-desc {
            font-size: 1.3rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .stars {
            margin-left: 10px;
        }
    }

    .btn-container {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .add-btn, .close-popup {
        padding: 5px;
        font-size: 1.5rem;
        border: 1px solid black;
        width: 40%;
        border-radius: 10px;
    }
}


//add review form

.add-form-container, .edit-form-container {
    height: calc(100% - 40px);
 
    

    .add-form {
        border: 2px solid black;
        background: rgba(0, 0, 0, 0.7);
        margin: 10px auto;
        width: 35%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        padding: 10px;
        border-radius: 10px;
    }

    .ind-field {
        width: 90%;
        height: 20%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        margin: 10px 0;

        .stars-rating {
          
            width: 100%;
            
        }


        h2 {
            align-self: center;
            font-size: 2rem;
            color: white;
            letter-spacing: 1px;
        }

        label {
            font-size: 1.5rem;
            color: white;
        }

        input {
            padding: 5px 10px;
            border-radius: 10px;
            font-size: 1.4rem;
            width: 100%;
        }

        .image {
            color: white;
            padding: 5px 0px;
        }

        textarea {
            padding: 5px 10px;
            border-radius: 10px;
            font-size: 1.4rem;
            width: 100%;
        }
    }

    .add-btn {
        padding: 5px;
        color: white;
        background: black;
        width: 40%;
        font-size: 1.4rem;
        border: 0.5px solid white;
        border-radius: 10px;
        transition: 0.4s;
        margin-top: 20px;

        &:hover {
            background: rgb(220, 35, 96);
            transition: 0.4s;
        }
    }


}

`;
