import { CustomCursor } from "react-svg-cursor";

import svg from "../../assets/images/svgs/Cursor.svg";

export default function Cursor() {
  return (
    <>
      <CustomCursor
        component={svg}
        isDisabled={false}
        width={20}
        height={20}
        zIndex={420}
        transform="translate(-30%, -10%) rotateZ(-22deg)"
      />
    </>
  );
}
