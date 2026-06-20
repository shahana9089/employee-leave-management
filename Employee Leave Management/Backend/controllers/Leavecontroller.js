import Leave from "../models/Leave.js";


// Leave apply

export const applyLeave = async (req, res) => {

    try {

        const leave = await Leave.create(req.body);

        res.json({

            success: true,

            leave

        })


    }

    catch (error) {

        console.log(error);

    }


}

export const getAllLeaves = async (req, res) => {

    try {

        const leaves = await Leave.find()

            .populate("employeeId")

        res.json(leaves)

    } catch (error) {

        console.log(error)

    }
}

export const getEmployeeLeaves = async (req, res) => {

    try {

        const leaves = await Leave.find({

            employeeId: req.params.id

        })

        res.json(leaves)

    } catch (error) {

        console.log(error)
    }
}

export const updateLeaveStatus = async (req, res) => {

    try {

        const leave = await Leave.findByIdAndUpdate(

            req.params.id,


            {

                status: req.body.status

            },

            { new: true }
        )

        console.log(leave)

        res.json(leave)




    } catch (error) {
        console.log(error)
    }
}