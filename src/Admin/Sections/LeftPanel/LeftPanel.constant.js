import { RiDashboardLine } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import { LuWarehouse } from "react-icons/lu";
import { MdMiscellaneousServices } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
 import { HiOutlineUserGroup } from "react-icons/hi";

export const LEFT_PANEL_KEYS = [
    {
        tabName: 'Dash Board',
        tabKey: 'dash_board',
        component: <RiDashboardLine />,
    },
    {
        tabName: 'Customers',
        tabKey: 'customers',
        component: <HiOutlineUserGroup />,
    },
    {
        tabName: 'Order',
        tabKey: 'order',
        component: <TbTruckDelivery />,
    },
    {
        tabName: 'Sales',
        tabKey: 'sales',
        component: <GiMoneyStack />,
    },
    {
        tabName: 'Products',
        tabKey: 'products',
        component: <LuWarehouse />,
    },
    {
        tabName: 'Service',
        tabKey: 'service',
        component: <MdMiscellaneousServices />,
    },
]