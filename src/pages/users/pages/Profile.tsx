import CustomCard from '../../../components/cards/CustomCard';
import Grid from '@mui/material/Grid';

const UserProfile = () => {
    return(
        <div>
            <CustomCard title="Profile">
                <Grid container spacing={3}>
                <Grid item sm={12} lg={4}>
                    <CustomCard title="">
                        <div></div>
                    </CustomCard>
                </Grid>
                <Grid item sm={12} lg={8}>
                    <CustomCard title="">
                        <div></div>
                    </CustomCard>
                </Grid>
            </Grid>
            </CustomCard>
        </div>
    );
}

export default UserProfile;