import {
	HeaderButtonCart,
	HeaderButtonLocation,
	HeaderButtonsContainer,
	HeaderContainer,
} from "./styles";

import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
	return (
		<HeaderContainer>
			<div className="container">
				<img src={coffeeDeliveryLogo} />

				<HeaderButtonsContainer>
					<HeaderButtonLocation>
						<MapPin size={20} weight="fill" />
						Porangatu, GO
					</HeaderButtonLocation>

					<HeaderButtonCart>
						<ShoppingCart size={20} weight="fill" />
					</HeaderButtonCart>
				</HeaderButtonsContainer>
			</div>
		</HeaderContainer>
	);
}
