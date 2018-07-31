class InfoGallery extends Component {
    state = {
        activeIndex: 0,
    }

    onLeftClick = () => this.setState(prevState => {
        if (prevState.activeIndex < 1) return {
            activeIndex: this.props.panes.length - 1,
        };
        return {
            activeIndex: prevState.activeIndex - 1,
        }
    })
    
    onRightClick = () => this.setState(prevState => {
        if (prevState.activeIndex > this.props.panes.length - 2) return {
            activeIndex: 0,
        }
        return {
            activeIndex: prevState.activeIndex + 1
        }
    })

    onButtonClick = (e, {name}) => this.setState({ activeIndex: name })
    
    render() {
        const {panes} = this.props;
        const {activeIndex} = this.state;
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2} verticalAlign='middle'>
                        <Button basic icon='chevron left' onClick={this.onLeftClick} />
                    </Grid.Column>
                    <Grid.Column width={6}><p>{panes[activeIndex].text}</p></Grid.Column>
                    <Grid.Column width={6}><Image src={panes[activeIndex].image} /></Grid.Column>
                    <Grid.Column width={2} verticalAlign='middle'>
                        <Button basic icon='chevron right' onClick={this.onRightClick} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    {panes.map((_pane,index) => 
                        <Button
                            key={`button-${index}`} 
                            name={index} 
                            basic={activeIndex===index} 
                            onClick={this.onButtonClick} 
                            circular icon color='black'
                            size='mini'  /> )}
                </Grid.Row>
            </Grid>
        );
    } 
}