import React from 'react';
import CustomCard from '../../../components/cards/CustomCard';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DepartmentModules from './dept-details-pages/Modules';

interface TabPanelProps {
    children: React.ReactNode;
    index:number;
    value:number;
}

const TabPanel = (props: TabPanelProps) => {
    const { children, index, value, ...other } = props;

    return(
        <div
            role="tabpanel"
            hidden={value !== index }
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p:3}}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const a11yProps = (index:number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

const DepartmentDetails = () => {
    const [value, setValue] = React.useState(0);
    const handleTabChange = (evnt: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    return(
        <CustomCard title={"Computer Studies"}>
            <div>
                <Box sx={{ borderBotton:1, borderColor:'divider'}}>
                    <Tabs onChange={handleTabChange} value={value}>
                        <Tab label="Overview" {...a11yProps(0)}/>
                        <Tab label="Courses" {...a11yProps(1)} />
                        <Tab label="Modules" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                   <CustomCard title="Department Details">
                      <div>1</div>
                   </CustomCard>
                </TabPanel>
                 <TabPanel value={value} index={1}>
                   <CustomCard title="Courses">
                      <div>2</div>
                   </CustomCard>
                </TabPanel>
                 <TabPanel value={value} index={2}>
                   <CustomCard title="Modules">
                      <DepartmentModules />
                   </CustomCard>
                </TabPanel>
            </div>
        </CustomCard>
    );
}

export default DepartmentDetails;