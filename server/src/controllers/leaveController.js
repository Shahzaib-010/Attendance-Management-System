import Leave from "../models/Leave.js";

/**
 * ================================
 * USER → APPLY FOR LEAVE
 * ================================
 */
export const applyLeave = async (req, res) => {
  try {
    const { reason, fromDate, toDate } = req.body;

    // Validation
    if (!reason || !fromDate || !toDate) {
      return res.status(400).json({
        success: false,
        error: "All fields are required",
      });
    }

    const leave = await Leave.create({
      user: req.user._id,                 // from auth middleware
      employeeId: req.user.employeeId,    // from auth middleware
      reason,
      fromDate,
      toDate,
    });

    res.status(201).json({
      success: true,
      message: "Leave request submitted",
      leave,
    });
  } catch (error) {
    console.error("Apply Leave Error:", error.message);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

/**
 * ================================
 * USER → GET OWN LEAVES
 * ================================
 */
export const getMyLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find({ user: req.user._id })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      leaves,
    });
  } catch (error) {
    console.error("Get My Leaves Error:", error.message);
    res.status(500).json({
      success: false,
      error: "Failed to fetch user leaves",
    });
  }
};

/**
 * ================================
 * ADMIN → GET ALL LEAVES
 * ================================
 */
export const getAllLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find()
      .populate("user", "name email employeeId department role")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      leaves,
    });
  } catch (error) {
    console.error("Get All Leaves Error:", error.message);
    res.status(500).json({
      success: false,
      error: "Failed to fetch all leaves",
    });
  }
};

/**
 * ================================
 * ADMIN → APPROVE / REJECT LEAVE
 * ================================
 */
export const updateLeaveStatus = async (req, res) => {
  try {
    const { status, adminComment } = req.body;

    // Validation
    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({
        success: false,
        error: "Invalid status",
      });
    }

    const leave = await Leave.findById(req.params.id);

    if (!leave) {
      return res.status(404).json({
        success: false,
        error: "Leave not found",
      });
    }

    leave.status = status;
    leave.adminComment = adminComment || "";

    await leave.save();

    res.status(200).json({
      success: true,
      message: `Leave ${status}`,
      leave,
    });
  } catch (error) {
    console.error("Update Leave Status Error:", error.message);
    res.status(500).json({
      success: false,
      error: "Failed to update leave status",
    });
  }
};
