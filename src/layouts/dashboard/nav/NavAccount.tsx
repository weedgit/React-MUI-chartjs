// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
// auth
import { useAuthContext } from '../../../auth/useAuthContext';
// components
import { CustomAvatar } from '../../../components/custom-avatar';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 5),
  // borderRadius: Number(theme.shape.borderRadius) * 1.5,
  // backgroundColor: alpha(theme.palette.grey[500], 0.12),
  borderBottom: '1px solid gray',
}));

// ----------------------------------------------------------------------

export default function NavAccount() {
  const { user } = useAuthContext();

  return (
    <StyledRoot>
      <CustomAvatar src="/assets/icons/navbar/NavbarAvatar.png"/>

        <Typography variant="subtitle2" noWrap style={{color:'red'}}>
          Gamely
        </Typography>
    </StyledRoot>
  );
}
