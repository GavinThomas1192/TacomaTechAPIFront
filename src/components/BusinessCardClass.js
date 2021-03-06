
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 600,
    }
};

/*
    Displays information about each business listed in the
    return array.
 */
class BusinessCardClass extends React.Component {
    constructor(props) {
        super(props);
    }

    /*
        Currently displays just the name and a description of a business.
        I still need to figure out how to click on the "details" button
        then display details about that business.
        I think the best way to do that for now is with an expanding element of some type.
        However, I also want to do it the "best practices" way so whatever that
        is, I'll refactor to that after I get it working.
    */
    render() {
        const { thisBiz } = this.props;

        console.log({ thisBiz });

        return (
            <div>
                <Card className="card">
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {/*{this.props.bizListings.name}*/}
                            { thisBiz.name }
                        </Typography>
                        <Typography component="p">
                            {/*{this.props.bizListings.description}*/}
                            { thisBiz.description }
                        </Typography>
                        {/*also want to add in more detail info either in a "details" type of
                        card or a UI element that expands.  just want to get these to render first*/}
                    </CardContent>
                    <CardActions>
                        <Button color="primary" size="small">
                            Website
                        </Button>
                        {/*<Button size="small" color="primary">*/}
                            {/*Map*/}
                        {/*</Button>*/}
                    </CardActions>
                </Card>
            </div>
        );
    }
}

BusinessCardClass.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BusinessCardClass);