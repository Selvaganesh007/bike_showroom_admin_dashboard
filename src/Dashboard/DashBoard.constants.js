import { GrDeliver } from "react-icons/gr";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { MdBikeScooter } from "react-icons/md";

export const dashboardCards = [
  {
    card_name: "Orders",
    item_count: 12,
    icon: <GrDeliver />,
  },
  {
    card_name: "Revenue",
    item_count: "₹23,43,324",
    icon: <GiTakeMyMoney />,
  },
  {
    card_name: "Service",
    item_count: 14,
    icon: <RiCustomerService2Fill />,
  },
  {
    card_name: "Customers",
    item_count: 240,
    icon: <FaUsers />,
  },
  {
    card_name: "Products",
    item_count: 6,
    icon: <MdBikeScooter />,
  },
];

export const notificationList = [
  {
    notification_type: 'service',
    notification_for: 'admin',
    notification_User: 'Selvaganesh',
    user_id: '001',
  },
  {
    notification_type: 'service',
    notification_for: 'admin',
    notification_User: 'Dharunkumar',
    user_id: '002',
  },
  {
    notification_type: 'service',
    notification_for: 'admin',
    notification_User: 'Edward',
    user_id: '004',
  },
  {
    notification_type: 'service',
    notification_for: 'admin',
    notification_User: 'Pradeep',
    user_id: '003',
  },
]