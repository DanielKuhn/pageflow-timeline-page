(function() {
  class Timeline extends React.Component {
    render() {
      return (
        <ul className="timeline">
          {this.renderTimelineItems()}
        </ul>
      );
    }

    renderTimelineItems() {
      var {TimelineItem} = pageflow.timelinePage;

      return this.props.pageLinks.map((pageLink) => {
        return (
          <TimelineItem timelineLayout={this.props.layout} pageLink={pageLink} key={pageLink.id} />
        );
      });
    }
  };

  pageflow.timelinePage.Timeline = pageflow.react.createContainer(Timeline);
}());
