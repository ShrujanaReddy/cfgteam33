import { Box } from "@mui/material";
import Navbar from "scenes/navbar";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const HomePage = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Box flex="1" display="flex" alignItems="center" justifyContent="center">
        <WidgetWrapper>
          <h1 style={{ textAlign: "center" }}>Hi there!</h1>
        </WidgetWrapper>
      </Box>
    </Box>
  );
};

export default HomePage;


// const HomePage = () => {
//   return (
//     <Box>
//       <Navbar />
//       <Box padding="2rem">
//         <FlexBetween>
//           <WidgetWrapper>
//             <h1>Hi there!</h1>
//           </WidgetWrapper>
//         </FlexBetween>
//       </Box>
//     </Box>
//   );
// };