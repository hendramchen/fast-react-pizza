import { useSelector } from 'react-redux';
import { UserType } from '../../types';

export default function Username() {
  const username = useSelector(
    (state: { user: UserType }) => state.user.username,
  );
  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}
