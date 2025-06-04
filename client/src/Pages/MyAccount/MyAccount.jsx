import { Button } from "@mui/material";
import { GrCloudUpload } from "react-icons/gr";
import { LuLogOut } from "react-icons/lu";
import { BsBagCheck, BsBagDash, BsHeart } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import AccountSidebar from "../../components/AccountSidebar/AccountSidebar";

const MyAccount = () => {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[25%] ">
          <AccountSidebar/>
        </div>

        <div className="col2 w-[60%] ">
          <div className="card bg-white p-5 shadow-md rounded-md">
            <h2>My Profile</h2>
            <hr />
            <form>
              <div className="flex items-center gap-3 mt-3">
              <div className="w-[50%]">
                <TextField id="outlined-basic" label="Name" variant="outlined" size="small" className="w-full" />
              </div>
              <div className="w-[50%]">
                <TextField id="outlined-basic" label="Email" variant="outlined" size="small" className="w-full" />
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <div className="w-[50%]">
                <TextField id="outlined-basic" label="Phone Number" variant="outlined" size="small" className="w-full" />
              </div>
            </div>
            <br />
            <div className="flex items-center gap-4">
              <Button className="btn-org btn-lg w-[100px] ">Save</Button>
              <Button className="btn-border btn-lg w-[100px] ">Cancel</Button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
