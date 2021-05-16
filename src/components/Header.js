import React ,{ useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from '@material-ui/icons/Close';


const Header = () => {


    const myArray = [
        {
            id:1,
            name:"EXISTING INVENTORY",
        },
        {
            id:2,
            name:"USED INVENTORY",
            
        },
        {
            id:3,
            name:"TRADE-IN",
            
        },
        {
            id:4,
            name:"CYBERTRUCK",
        },
        {
            id:5,
            name:"ROADSTER",
        },
        {
            id:6,
            name:"SEMI",
        },
        {
            id:7,
            name:"CHARGING",
        },
        {
            id:8,
            name:"POWERWALL",
        },
        {
            id:9,
            name:"COMMERCIAL ENERGY",
        },
        {
            id:10,
            name:"UTILITIES",
        },
        {
            id:11,
            name:"TEST DRIVE"
        },
        {
            id:12,
            name:"FIND US"
        },
        {
            id:13,
            name:"SUPPORT"
        },
        {
            id:14,
            name:"UNITED STATES"
        }
    ]


    // const [myArray, setmyArray] = useState(bioData);
    const [burgerStatus,setBurgerStatus] = useState(false);


	return (
		<Container>
			<a href="#">
				<img
					src="./images/logo.svg"
					alt="Tesla Logo"
                    width="90px"
					
				/>
			</a>

			<Menu>
				<a href="#">Model S</a>
				<a href="#">Model 3</a>
				<a href="#">Model X</a>
				<a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panels</a>
			</Menu>

			<RightMenu>
				<a href="#">Shop</a>
				<a href="#">TESLA ACCOUNT</a>
				<CustomMenu onClick={()=> setBurgerStatus(true)} />
			</RightMenu>

            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=> setBurgerStatus(false)}/>
                </CloseWrapper>

                {
                myArray.map((currElem) => {
                    return <li className="options"><a href="#">{currElem.name}</a></li>
                })
                }

            </BurgerNav>
		</Container>
	);
};

export default Header;

const Container = styled.div`
	min-height: 60px;
    height: 15px;
	position: fixed;
	display: flex;
	align-items: center;
    justify-content:space-between;
	padding: 0 20px;
	top: 0;
	left: 0;
	right: 0;
    z-index:1;
`;

const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;

	a {
		font-weight: 600;
        font-size:0.9rem;
		text-transform: uppercase;
		padding: 0px 10px;
		flex-wrap: no-wrap;
	}

    @media (max-width:768px){
        display:none;
    }
`;

const RightMenu = styled.div`

    display:flex;
    align-items:center;
	a {
		font-weight: 300;
        font-size:0.9rem;
		text-transform: uppercase;
		margin-right: 10px;
	}
`;

const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
`;

const BurgerNav =  styled.div`
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    // overflow: scroll;
    scroll-behaviour: smooth;
    // overflow-y:hidden;
    background:white;
    width:300px;
    list-style:none;
    text-align:start;
    z-index:99;
    padding:20px;
    display:flex;
    flex-direction:column;
    transform : ${props => props.show ? `translateX(0)` : `translateX(100%)`};
    transition : transform 0.2s;

    li{
        padding: 15px;
        border-bottom: 1px solid rgba(0,0,0,0.2);
    }
    a{
        font-weight: 600;
    }
` 

const CustomClose = styled(CloseIcon)`
    cursor:pointer;
`

const CloseWrapper = styled.div`
    display:flex;
    justify-content: flex-end;
`
