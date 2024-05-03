import getBlockedServers from "./methods/getBlockedServers";
import getUUIDFromUsername from "./methods/getUUIDFromUsername";
import getUUIDsFromUsernames from "./methods/getUUIDsFromUsernames";
import changeName from "./methods/sessionAccount/changeName";
import changeSkin from "./methods/sessionAccount/changeSkin";
import checkNameAvailability from "./methods/sessionAccount/checkNameAvailability";
import checkProductVoucher from "./methods/sessionAccount/checkProductVoucher";
import getAttributes from "./methods/sessionAccount/getAttributes";
import getBlockedPlayers from "./methods/sessionAccount/getBlockedPlayers";
import getCertificates from "./methods/sessionAccount/getCertificates";
import getProfile from "./methods/sessionAccount/getProfile";
import getProfileChangeInfo from "./methods/sessionAccount/getProfileChangeInfo";
import getSecurityQuestions from "./methods/sessionAccount/getSecurityQuestions";
import hideCape from "./methods/sessionAccount/hideCape";
import resetSkin from "./methods/sessionAccount/resetSkin";
import sendSecurityAnswers from "./methods/sessionAccount/sendSecurityAnswers";
import showCape from "./methods/sessionAccount/showCape";
import uploadSkin from "./methods/sessionAccount/uploadSkin";
import verifySecurityLocation from "./methods/sessionAccount/verifySecurityLocation";

const MojangInterface = {
    sessionMethods: {
        changeName,
        uploadSkin,
        changeSkin,
        resetSkin,
        showCape,
        hideCape,
        checkNameAvailability,
        checkProductVoucher,
        getAttributes,
        getBlockedPlayers,
        getCertificates,
        getProfile,
        getProfileChangeInfo,
        getSecurityQuestions,
        sendSecurityAnswers,
        verifySecurityLocation
    },
    globalMethods: {
        getBlockedServers,
        getUUIDFromUsername,
        getUUIDsFromUsernames
    }
}

export default MojangInterface;