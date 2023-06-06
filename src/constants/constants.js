import Dashboard from "../assets/icons/Dashboard.png";
import campaign from "../assets/icons/campaign.png";
import channels from "../assets/icons/channels.png";
import command from "../assets/icons/command.png";
import devices from "../assets/icons/devices.png";
import history from "../assets/icons/history.png";
import media from "../assets/icons/media.png";
import zone from "../assets/icons/zone.png";

export const dashboardElements = [
  {
    name: "Campaigns",
    icon: campaign
  },
  {
    name: "Commands",
    icon: command
  },
  {
    name: "Zones",
    icon: zone
  },
  {
    name: "Channels",
    icon: channels
  },
  {
    name: "Devices",
    icon: devices
  },
  {
    name: "Media Library",
    icon: media
  },
  {
    name: "History",
    icon: history
  }
];


export const generalInfoContent = [
  { name: "Projects", value: Math.floor(Math.random() * 100) + 1 },
  { name: "Users", value: Math.floor(Math.random() * 100) + 1 },
  { name: "Channels", value: Math.floor(Math.random() * 100) + 1 },
  { name: "Devices", value: Math.floor(Math.random() * 100) + 1 }
];
