import React, { useContext } from 'react';
import Navber from '../../Pages/Shared/Navber/Navber';
import { Outlet, Link } from 'react-router-dom'
import { AuthContex } from '../../Context/AuthProvider';
import useAdmin from '../../Hooks/useAdmin/useAdmin';

const DashboardLayout = () => {
  const { user } = useContext(AuthContex)

  const [isAdmin] = useAdmin(user?.email)




  const sellerManue = <>
    <li><Link to="/dashbord/addproduct">Add A Product</Link></li>
    <li><Link to="/dashbord/myproduct">My Product</Link></li>
    <li><Link to="/dashbord/mybuyer">My Buyer</Link></li>
  </>


  const adminMenue = <>
    <li><Link to="/dashbord/allsellers">All Sellers</Link></li>
    <li><Link to="/dashbord/allbuyers">All Buyers</Link></li>
  </>



  const buyerManue = <>
    <li><Link to="/dashbord/myorders">My Orders</Link></li>
  </>





  return (
    <div>
      <Navber></Navber>

      <div className="drawer drawer-mobile">
        <input id="dashbord-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">

          <Outlet></Outlet>


        </div>
        <div className="drawer-side bg-white">
          <label htmlFor="dashbord-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content">


            {
              isAdmin === 'Seller' && sellerManue

            }

            {
              isAdmin === 'Admin' && adminMenue
            }


            {
              isAdmin === 'Buyer' && buyerManue
            }


          </ul>

        </div>
      </div>


    </div>
  );
};

export default DashboardLayout;