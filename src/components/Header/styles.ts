import styled from "styled-components";

export const HeaderContainer = styled.header`
	width: 100%;
	height: 6.5rem;
	background: ${({ theme }) => theme.colors["base-background"]};
	display: flex;
	align-items: center;
	justify-content: center;

	> div {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

export const HeaderButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;
`;

export const HeaderButtonBase = styled.button`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4px;
	min-width: 2.3rem;
	height: 2.3rem;
	border-radius: 6px;
	border: none;
	padding: 0 0.5rem;
	font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
`;

export const HeaderButtonLocation = styled(HeaderButtonBase)`
	background: ${({ theme }) => theme.colors["brand-purple-light"]};
	color: ${({ theme }) => theme.colors["brand-purple-dark"]};
`;

export const HeaderButtonCart = styled(HeaderButtonBase)`
	background: ${({ theme }) => theme.colors["brand-yellow-light"]};
	color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
`;
