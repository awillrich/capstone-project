import getTestState from "../lib/getTestState";
import { Tooltip } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { green, red, orange, yellow, blue } from "@material-ui/core/colors";

export default function TestState({ test }) {
  const testState = getTestState(test);

  const tooltips = {
    finished: (
      <Tooltip title="Abgeschlossen">
        <FiberManualRecordIcon fontSize="small" style={{ color: green[500] }} />
      </Tooltip>
    ),
    evaluation: (
      <Tooltip title="Auswerten">
        <FiberManualRecordIcon fontSize="small" style={{ color: blue[500] }} />
      </Tooltip>
    ),
    running: (
      <Tooltip title="Läuft">
        <FiberManualRecordIcon
          fontSize="small"
          style={{ color: orange[500] }}
        />
      </Tooltip>
    ),
    ready: (
      <Tooltip title="Bereit">
        <FiberManualRecordIcon
          fontSize="small"
          style={{ color: yellow[500] }}
        />
      </Tooltip>
    ),
    uncomplete: (
      <Tooltip title="Unvollständig">
        <FiberManualRecordIcon fontSize="small" style={{ color: red[500] }} />
      </Tooltip>
    ),
  };

  return tooltips[testState];
}
