import useAuth from '../hooks/useAuth';
import { AuthContext } from '../state/context/AuthContext';

interface Props {
	children: React.ReactNode;
}

export default function AuthContextProvider({ children }: Props) {
	const { user, login, logout } = useAuth();

	return (
		<AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
	);
}
