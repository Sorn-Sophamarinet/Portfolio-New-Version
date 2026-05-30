import type * as React from "react"
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faArrowUpRightFromSquare,
  faBars,
  faBolt,
  faBoxesStacked,
  faBriefcase,
  faCalendarDays,
  faCamera,
  faCheck,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faCircle,
  faCloud,
  faCode,
  faCodeBranch,
  faCommentDots,
  faDatabase,
  faDownload,
  faEllipsis,
  faEnvelope,
  faFileCode,
  faFileLines,
  faFolder,
  faGlobe,
  faGraduationCap,
  faGripVertical,
  faHeart,
  faLocationDot,
  faMagnifyingGlass,
  faMinus,
  faMoon,
  faNetworkWired,
  faPalette,
  faPaperPlane,
  faPhone,
  faRobot,
  faServer,
  faSpinner,
  faSun,
  faTableColumns,
  faTerminal,
  faToolbox,
  faUser,
  faWandMagicSparkles,
  faXmark,
} from "@fortawesome/free-solid-svg-icons"
import { faFigma, faGithub, faGitlab, faLinkedin } from "@fortawesome/free-brands-svg-icons"

type IconProps = Omit<React.ComponentProps<typeof FontAwesomeIcon>, "icon">

function createIcon(icon: IconDefinition) {
  function Icon(props: IconProps) {
    return <FontAwesomeIcon icon={icon} {...props} />
  }

  return Icon
}

export const ArrowDown = createIcon(faArrowDown)
export const ArrowLeft = createIcon(faArrowLeft)
export const ArrowRight = createIcon(faArrowRight)
export const ArrowUp = createIcon(faArrowUp)
export const ArrowUpRight = createIcon(faArrowUpRightFromSquare)
export const Boxes = createIcon(faBoxesStacked)
export const Bot = createIcon(faRobot)
export const Braces = createIcon(faFileCode)
export const Briefcase = createIcon(faBriefcase)
export const Calendar = createIcon(faCalendarDays)
export const Camera = createIcon(faCamera)
export const CheckIcon = createIcon(faCheck)
export const ChevronDownIcon = createIcon(faChevronDown)
export const ChevronLeftIcon = createIcon(faChevronLeft)
export const ChevronRight = createIcon(faChevronRight)
export const ChevronRightIcon = createIcon(faChevronRight)
export const ChevronUpIcon = createIcon(faChevronUp)
export const CircleIcon = createIcon(faCircle)
export const Cloud = createIcon(faCloud)
export const Code2 = createIcon(faCode)
export const Database = createIcon(faDatabase)
export const Download = createIcon(faDownload)
export const ExternalLink = createIcon(faArrowUpRightFromSquare)
export const Figma = createIcon(faFigma)
export const FileText = createIcon(faFileLines)
export const Folder = createIcon(faFolder)
export const GitBranch = createIcon(faCodeBranch)
export const Github = createIcon(faGithub)
export const Gitlab = createIcon(faGitlab)
export const Globe = createIcon(faGlobe)
export const GraduationCap = createIcon(faGraduationCap)
export const GripVerticalIcon = createIcon(faGripVertical)
export const Heart = createIcon(faHeart)
export const Loader2Icon = createIcon(faSpinner)
export const Linkedin = createIcon(faLinkedin)
export const Mail = createIcon(faEnvelope)
export const MapPin = createIcon(faLocationDot)
export const Menu = createIcon(faBars)
export const MessageSquare = createIcon(faCommentDots)
export const MinusIcon = createIcon(faMinus)
export const Moon = createIcon(faMoon)
export const MoreHorizontal = createIcon(faEllipsis)
export const MoreHorizontalIcon = createIcon(faEllipsis)
export const Network = createIcon(faNetworkWired)
export const Palette = createIcon(faPalette)
export const Phone = createIcon(faPhone)
export const Send = createIcon(faPaperPlane)
export const Server = createIcon(faServer)
export const Sparkles = createIcon(faWandMagicSparkles)
export const SearchIcon = createIcon(faMagnifyingGlass)
export const Sun = createIcon(faSun)
export const PanelLeftIcon = createIcon(faTableColumns)
export const Terminal = createIcon(faTerminal)
export const User = createIcon(faUser)
export const Wrench = createIcon(faToolbox)
export const X = createIcon(faXmark)
export const Zap = createIcon(faBolt)
